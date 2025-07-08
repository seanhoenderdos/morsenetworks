/**
 * FormResult Component
 *
 * Displays the final eligibility result after form completion with appropriate
 * visual styling, messaging, and call-to-action buttons based on the result.
 * Supports three result states: eligible, possibly-eligible, and not-eligible.
 *
 * Features:
 * - Dynamic styling and messaging based on eligibility result
 * - Contextual call-to-action buttons
 * - Option to restart the form process
 * - Accessible design with clear visual hierarchy
 *
 * @param {string} eligibilityResult - The eligibility result ('eligible' | 'possibly-eligible' | 'not-eligible')
 * @param {Function} onReset - Callback function to reset and restart the form
 * @returns {JSX.Element} Complete results display with actions
 */

import { FiAlertCircle, FiCheck, FiX } from 'react-icons/fi';
import Button from '../Button';

const FormResult = ({ eligibilityResult, onReset }) => {
  /**
   * Configuration object for different result states
   * Each state has its own icon, title, description, and CTA styling
   */
  const resultConfig = {
    // Fully eligible - positive outcome
    eligible: {
      icon: <FiCheck className="w-16 h-16" style={{ color: '#3BD277' }} />,
      title: "Congratulations! You're Eligible",
      description:
        'Based on your responses, your business meets all the criteria for the Growth Finance Scheme.',
      ctaText: 'Apply Now',
      ctaColor: 'green',
    },
    // Partially eligible - cautious optimism
    'possibly-eligible': {
      icon: <FiAlertCircle className="w-16 h-16 text-amber-500" />,
      title: 'You May Be Eligible',
      description:
        'Your business meets some criteria. We recommend speaking with our team to discuss your options.',
      ctaText: 'Contact Us',
      ctaColor: 'primary',
    },
    // Not eligible - alternative options
    'not-eligible': {
      icon: <FiX className="w-16 h-16" style={{ color: '#D94040' }} />,
      title: 'Not Currently Eligible',
      description:
        "Unfortunately, your business doesn't meet the current criteria for this scheme.",
      ctaText: 'Explore Options',
      ctaColor: 'secondary',
    },
  };

  // Get the configuration for the current result
  const config = resultConfig[eligibilityResult];

  /**
   * Handles the main call-to-action button click
   * This could be extended to handle different actions based on eligibility result
   */
  const handleCTAClick = () => {
    // Handle CTA action - this could open a modal, redirect, etc.
    console.log('CTA clicked:', eligibilityResult);
    // TODO: Implement specific actions for each result type
  };

  return (
    <div className="text-center space-y-8">
      {/* Result icon display */}
      <div className="flex justify-center">{config.icon}</div>

      {/* Result text content */}
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-primary">{config.title}</h2>
        <p className="text-lg text-secondary max-w-md mx-auto">
          {config.description}
        </p>
      </div>

      {/* Action buttons */}
      <div className="space-y-3">
        {/* Primary call-to-action button */}
        <Button
          className="w-full font-semibold text-lg"
          onClick={handleCTAClick}
          color={config.ctaColor}
        >
          {config.ctaText}
        </Button>

        {/* Secondary action - restart form */}
        <Button
          onClick={onReset}
          className="w-full font-medium"
          type="outline"
          color="gray"
          px={'px-14'}
        >
          Start Over
        </Button>
      </div>
    </div>
  );
};

export default FormResult;
