/**
 * useFormLogic Hook
 *
 * Custom React hook that encapsulates all form logic for the eligibility checker.
 * This hook acts as a bridge between the UI components and the Zustand store,
 * providing form validation, navigation, and state management functionality.
 *
 * Features:
 * - Form validation using Zod schemas
 * - Step navigation with validation checks
 * - Error handling and display
 * - Field change management with error clearing
 * - Integration with eligibility calculation
 *
 * @returns {Object} Form state and handler functions
 */

import { useCallback, useState } from 'react';
import { useEligibilityStore } from '../store/eligibilityStore';
import { stepValidationSchemas } from '../validation/eligibilityValidation';

export const useFormLogic = () => {
  // Extract store state and actions
  // Store manages the core form data and navigation state
  const {
    formData, // Current form responses
    currentStep, // Current step (1-5)
    totalSteps, // Total number of steps
    isCompleted, // Whether form is finished
    eligibilityResult, // Final eligibility determination
    setFormData, // Function to update form data
    nextStep, // Function to advance to next step
    previousStep, // Function to go back one step
    calculateEligibility, // Function to determine final eligibility
    resetForm, // Function to reset entire form
  } = useEligibilityStore();

  // Local state for validation errors
  // We keep this separate from the store to avoid unnecessary re-renders
  const [errors, setErrors] = useState({});

  /**
   * Validates the current step's data using Zod schema
   *
   * @returns {boolean} True if validation passes, false otherwise
   */
  const validateCurrentStep = useCallback(() => {
    // Get the validation schema for the current step
    const schema = stepValidationSchemas[currentStep];

    // Extract only the data needed for current step validation
    // Filter form data to include only fields relevant to current step
    const stepData = Object.fromEntries(
      Object.entries(formData).filter(([key]) =>
        Object.keys(schema.shape).includes(key)
      )
    );

    try {
      // Attempt to validate the step data against the schema
      schema.parse(stepData);
      // If validation passes, clear any existing errors
      setErrors({});
      return true;
    } catch (error) {
      // If validation fails, extract error messages and set them
      const newErrors = {};
      error.errors.forEach(err => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return false;
    }
  }, [currentStep, formData]);

  /**
   * Handles moving to the next step or completing the form
   * Validates current step before proceeding
   */
  const handleNext = useCallback(() => {
    // Only proceed if current step validation passes
    if (validateCurrentStep()) {
      if (currentStep === totalSteps) {
        // If this is the last step, calculate eligibility
        calculateEligibility();
      } else {
        // Otherwise, move to next step
        nextStep();
      }
    }
  }, [
    validateCurrentStep,
    currentStep,
    totalSteps,
    calculateEligibility,
    nextStep,
  ]);

  /**
   * Handles moving to the previous step
   * Clears any validation errors when going back
   */
  const handlePrevious = useCallback(() => {
    // Clear validation errors when going back
    setErrors({});
    previousStep();
  }, [previousStep]);

  /**
   * Handles field value changes
   * Updates form data and clears field-specific errors
   *
   * @param {string} field - The form field name
   * @param {any} value - The new field value
   */
  const handleFieldChange = useCallback(
    (field, value) => {
      // Update the form data in the store
      setFormData(field, value);
      // Clear any existing error for this specific field
      setErrors(prev => ({ ...prev, [field]: undefined }));
    },
    [setFormData]
  );

  // Return all the state and handlers needed by form components
  return {
    formData, // Current form data
    currentStep, // Current step number
    totalSteps, // Total number of steps
    isCompleted, // Whether form is completed
    eligibilityResult, // Final eligibility result
    errors, // Current validation errors
    handleNext, // Function to go to next step
    handlePrevious, // Function to go to previous step
    handleFieldChange, // Function to handle field changes
    resetForm, // Function to reset the form
  };
};
