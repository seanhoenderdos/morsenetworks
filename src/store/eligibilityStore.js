import { create } from 'zustand';

/**
 * Eligibility Store - Zustand state management for loan eligibility form
 *
 * This store manages the complete state for the multi-step eligibility form,
 * including form data, navigation, validation, and eligibility calculation.
 *
 * Features:
 * - Multi-step form state management (5 steps total)
 * - Form data persistence across steps
 * - Step navigation (next, previous, direct navigation)
 * - Eligibility calculation based on business rules
 * - Form reset functionality
 * - Result categorization (eligible, possibly-eligible, not-eligible)
 *
 * Usage: Import and use with const { formData, setFormData, nextStep } = useEligibilityStore()
 */
export const useEligibilityStore = create((set, get) => ({
  /**
   * Form Data State
   *
   * Stores all user input from the eligibility form.
   * All fields start as null to indicate no selection has been made.
   */
  formData: {
    isUKRegistered: null, // Whether business is UK registered (yes/no)
    tradingPeriod: null, // Has been trading for required period (yes/no)
    annualTurnover: null, // Annual turnover range (50k-250k, 250k-1m, 1m+, etc.)
    previousFunding: null, // Has received previous government funding (yes/no)
    loanAmount: null, // Desired loan amount range (25k-50k, 50k-100k, 100k-250k)
  },

  /**
   * Form Navigation State
   *
   * Manages the current position in the multi-step form process.
   */
  currentStep: 1, // Current form step (1-based indexing)
  totalSteps: 5, // Total number of steps in the form
  isCompleted: false, // Whether the form has been completed and submitted
  eligibilityResult: null, // Final eligibility result (eligible/possibly-eligible/not-eligible)

  /**
   * Form Data Update Action
   *
   * Updates a specific field in the form data while preserving other fields.
   *
   * @param {string} field - The form field to update (key from formData)
   * @param {any} value - The new value for the field
   */
  setFormData: (field, value) =>
    set(state => ({
      formData: { ...state.formData, [field]: value },
    })),

  /**
   * Step Navigation Actions
   *
   * Functions to control movement through the multi-step form.
   */

  // Move to the next step (with boundary protection)
  nextStep: () =>
    set(state => ({
      currentStep: Math.min(state.currentStep + 1, state.totalSteps),
    })),

  // Move to the previous step (with boundary protection)
  previousStep: () =>
    set(state => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    })),

  // Jump directly to a specific step
  goToStep: step =>
    set(() => ({
      currentStep: step,
    })),

  /**
   * Eligibility Calculation Engine
   *
   * Analyzes form data against business rules to determine loan eligibility.
   *
   * Business Rules:
   * 1. Must be UK registered business
   * 2. Must have required trading period
   * 3. Must have sufficient annual turnover (£50k+)
   * 4. Must not have excessive previous government funding
   * 5. Must request valid loan amount (£25k-£250k)
   *
   * Result Categories:
   * - 'eligible': Meets all criteria
   * - 'possibly-eligible': Meets core criteria but may need review
   * - 'not-eligible': Does not meet minimum requirements
   *
   * @returns {string} Eligibility result category
   */
  calculateEligibility: () => {
    const { formData } = get();
    const {
      isUKRegistered,
      tradingPeriod,
      annualTurnover,
      previousFunding,
      loanAmount,
    } = formData;

    // Individual eligibility criteria checks
    const isUKBased = isUKRegistered === 'yes';
    const hasRequiredTradingPeriod = tradingPeriod === 'yes';

    // Sufficient turnover check (must be £50k or above)
    const hasSufficientTurnover =
      annualTurnover === '50k-250k' ||
      annualTurnover === '250k-1m' ||
      annualTurnover === '1m+';

    // Previous funding check (should not have excessive prior funding)
    const hasNoExcessivePriorFunding = previousFunding === 'no';

    // Valid loan amount check (within Growth Guarantee Scheme limits)
    const hasValidLoanAmount =
      loanAmount === '25k-50k' ||
      loanAmount === '50k-100k' ||
      loanAmount === '100k-250k';

    let result = 'not-eligible'; // Default to not eligible

    // Full eligibility check - all criteria must be met
    if (
      isUKBased &&
      hasRequiredTradingPeriod &&
      hasSufficientTurnover &&
      hasNoExcessivePriorFunding &&
      hasValidLoanAmount
    ) {
      result = 'eligible';
    }
    // Partial eligibility check - meets core requirements but may need manual review
    else if (
      isUKBased &&
      hasRequiredTradingPeriod &&
      (hasSufficientTurnover || hasValidLoanAmount)
    ) {
      result = 'possibly-eligible';
    }
    // If none of the above conditions are met, remains 'not-eligible'

    // Update store with final result and completion status
    set(() => ({
      eligibilityResult: result,
      isCompleted: true,
    }));

    return result;
  },

  /**
   * Form Reset Action
   *
   * Clears all form data and resets the form to its initial state.
   * Useful for starting over or clearing data after submission.
   */
  resetForm: () =>
    set(() => ({
      formData: {
        isUKRegistered: null,
        tradingPeriod: null,
        annualTurnover: null,
        previousFunding: null,
        loanAmount: null,
      },
      currentStep: 1,
      isCompleted: false,
      eligibilityResult: null,
    })),
}));
