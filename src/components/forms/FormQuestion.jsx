/**
 * FormQuestion Component
 *
 * Renders a single question in the eligibility form with multiple radio button options.
 * Provides visual feedback for selection state, hover effects, and error display.
 * Implements accessibility best practices with proper labeling and keyboard navigation.
 *
 * @param {string} title - The main question title
 * @param {string} description - Additional context or explanation for the question
 * @param {string} field - The form field name (used for form data mapping)
 * @param {Array} options - Array of option objects with 'value' and 'label' properties
 * @param {string} value - Currently selected value
 * @param {Function} onChange - Callback function when selection changes
 * @param {string} error - Error message to display (if any)
 * @returns {JSX.Element} Complete question with options and error display
 */

import { FiAlertCircle } from 'react-icons/fi';

const FormQuestion = ({
  title,
  description,
  field,
  options,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="flex flex-col gap-6">
      {/* Question header with title and description */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-primary-gradient">{title}</h2>
        <p className="text-secondary">{description}</p>
      </div>

      {/* Radio button options */}
      <div className="space-y-3">
        {options.map(option => (
          <label
            key={option.value}
            className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all hover:bg-gray-50 ${
              // Dynamic styling based on selection state and error state
              value === option.value
                ? 'border-primary bg-primary/5' // Selected state
                : 'border-gray' // Default state
            } ${error ? 'border-red' : ''}`} // Error state
          >
            {/* Hidden radio input for accessibility and form handling */}
            <input
              type="radio"
              name={field}
              value={option.value}
              checked={value === option.value}
              onChange={e => onChange(field, e.target.value)}
              className="sr-only" // Screen reader only - visually hidden
            />

            {/* Custom radio button visual */}
            <div
              className={`w-5 h-5 rounded-full border-2 mr-3 transition-colors ${
                value === option.value
                  ? 'border-primary bg-primary' // Selected styling
                  : 'border-gray' // Unselected styling
              }`}
            >
              {/* Inner dot for selected state */}
              {value === option.value && (
                <div className="w-full h-full rounded-full bg-white scale-50 transform" />
              )}
            </div>

            {/* Option label text */}
            <span className="text-secondary font-medium text-left text-sm">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      {/* Error message display */}
      {error && (
        <div className="flex items-center gap-2 text-red">
          <FiAlertCircle className="w-6 h-6" />
          <span className="text-[12px] text-left">{error}</span>
        </div>
      )}
    </div>
  );
};

export default FormQuestion;
