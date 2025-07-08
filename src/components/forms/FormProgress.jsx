/**
 * FormProgress Component
 *
 * Displays the current progress through the multi-step eligibility form.
 * Shows both textual progress (e.g., "Step 2 of 5") and a visual progress bar
 * with smooth animations when moving between steps.
 *
 * @param {number} currentStep - The current step number (1-based)
 * @param {number} totalSteps - Total number of steps in the form
 * @returns {JSX.Element} Progress indicator with step info and progress bar
 */

const FormProgress = ({ currentStep, totalSteps }) => {
  /**
   * Calculates the completion percentage for the progress bar
   * Uses currentStep - 1 because we want 0% at step 1, not 20%
   *
   * @returns {number} Progress percentage (0-100)
   */
  const getProgressPercentage = () => {
    return ((currentStep - 1) / totalSteps) * 100;
  };

  return (
    // Progress container with light background
    <div className="bg-white px-6 py-4">
      {/* Progress text indicators */}
      <div className="flex items-center justify-between mb-2">
        {/* Current step indicator */}
        <span className="text-sm font-medium text-secondary">
          Step {currentStep} of {totalSteps}
        </span>
        {/* Percentage completion */}
        <span className="text-sm font-medium text-secondary">
          {Math.round(getProgressPercentage())}%
        </span>
      </div>

      {/* Progress bar container */}
      <div className="w-full bg-gray rounded-full h-2">
        {/* Animated progress fill */}
        <div
          className="bg-primary h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${getProgressPercentage()}%` }}
        />
      </div>
    </div>
  );
};

export default FormProgress;
