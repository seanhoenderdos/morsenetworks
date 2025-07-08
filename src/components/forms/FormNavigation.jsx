/**
 * FormNavigation Component
 *
 * Provides navigation controls for the multi-step form with Previous and Next buttons.
 * Handles different states including disabled previous button on first step and
 * dynamic text for the next button on the final step.
 *
 * @param {number} currentStep - Current step number (1-based)
 * @param {number} totalSteps - Total number of steps in the form
 * @param {Function} onPrevious - Callback function for previous button click
 * @param {Function} onNext - Callback function for next button click
 * @returns {JSX.Element} Navigation bar with Previous and Next buttons
 */

import Button from '../Button';

const FormNavigation = ({ currentStep, totalSteps, onPrevious, onNext }) => {
  return (
    // Navigation container with light background
    <div className="bg-white px-3 py-1 flex min-lg:flex-row min-lg:justify-between w-full justify-center flex-col gap-2">
      {/* Previous button - disabled on first step */}
      <Button
        onClick={onPrevious}
        disabled={currentStep === 1}
        type="outline"
        className={`flex items-center justify-center space-x-2 px-12 sm:px-20 py-2 font-medium transition-colors ${
          currentStep === 1
            ? 'text-gray cursor-not-allowed' // Disabled state styling
            : 'text-black' // Enabled state styling
        }`}
      >
        <span>Previous</span>
      </Button>

      {/* Next/Submit button - changes text on final step */}
      <Button
        onClick={onNext}
        className="flex text-white font-medium text-nowrap px-12 sm:px-20"
        px={''}
      >
        {/* Dynamic button text based on current step */}
        <span className="w-full text-center">
          {currentStep === totalSteps ? 'Get results' : 'Next'}
        </span>
      </Button>
    </div>
  );
};

export default FormNavigation;
