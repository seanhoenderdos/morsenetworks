/**
 * EligibilityForm Component
 *
 * Main component for the multi-step eligibility checker for the Government-backed Growth Finance Scheme.
 * This form guides users through 5 questions to determine their eligibility for the finance scheme.
 *
 * Features:
 * - Multi-step form with progress tracking
 * - Real-time validation using Zod schemas
 * - Dynamic eligibility calculation
 * - Responsive design with accessibility features
 * - State management with Zustand
 *
 * @returns {JSX.Element} The complete eligibility form or results page
 */

import { FORM_QUESTIONS } from '../../constants/formQuestions';
import { useFormLogic } from '../../hooks/useFormLogic';
import FormNavigation from './FormNavigation';
import FormProgress from './FormProgress';
import FormQuestion from './FormQuestion';
import FormResult from './FormResult';

const EligibilityForm = () => {
  // Extract all necessary form state and handlers from our custom hook
  // This hook manages the entire form lifecycle including validation, navigation, and state
  const {
    formData, // Current form data object with all user responses
    currentStep, // Current step number (1-5)
    totalSteps, // Total number of steps in the form
    isCompleted, // Boolean indicating if form is completed and results should be shown
    eligibilityResult, // Final eligibility result ('eligible', 'possibly-eligible', 'not-eligible')
    errors, // Current validation errors object
    handleNext, // Function to proceed to next step (includes validation)
    handlePrevious, // Function to go back to previous step
    handleFieldChange, // Function to update form data when user selects an option
    resetForm, // Function to reset entire form to initial state
  } = useFormLogic();

  // If form is completed, show the results page instead of form questions
  if (isCompleted) {
    return (
      <div className="max-w-lg mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <FormResult
            eligibilityResult={eligibilityResult}
            onReset={resetForm}
          />
        </div>
      </div>
    );
  }

  // Get the current question configuration based on the current step
  // Questions are zero-indexed, so we subtract 1 from currentStep
  const currentQuestion = FORM_QUESTIONS[currentStep - 1];

  return (
    <div className="max-w-lg mx-auto">
      {/* Main form container with shadow and rounded corners */}
      <div className="bg-white rounded-3xl shadow-lg overflow-hidden p-2">
        {/* Progress indicator showing current step and completion percentage */}
        <FormProgress currentStep={currentStep} totalSteps={totalSteps} />

        {/* Question content area */}
        <div className="p-6">
          <FormQuestion
            title={currentQuestion.title}
            description={currentQuestion.description}
            field={currentQuestion.field}
            options={currentQuestion.options}
            value={formData[currentQuestion.field]}
            onChange={handleFieldChange}
            error={errors[currentQuestion.field]}
          />
        </div>

        {/* Navigation buttons (Previous/Next) */}
        <FormNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          onPrevious={handlePrevious}
          onNext={handleNext}
        />
      </div>
    </div>
  );
};

export default EligibilityForm;
