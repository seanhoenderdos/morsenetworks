import MenuSVG from '../assets/svg/MenuSVG';
import EligibilityForm from './forms/eligibilityForm';

/**
 * RightSidebar Component - Full-screen overlay sidebar for eligibility form
 *
 * Features:
 * - Slides in from the right side of the screen
 * - Full-screen overlay that covers the entire viewport
 * - Smooth slide animation with transform transitions
 * - Close button with animated menu icon
 * - Contains the eligibility checking form
 * - Responsive design with proper spacing and layout
 *
 * Behavior:
 * - Opens by sliding in from right (translate-x-0)
 * - Closes by sliding out to right (translate-x-full)
 * - 300ms ease-in-out transition for smooth animation
 * - High z-index (50) to appear above all other content
 * - Drop shadow for depth and separation from main content
 *
 * Props:
 * @param {boolean} isOpen - Controls sidebar visibility and animation state
 * @param {function} onClose - Callback function when close button is clicked
 *
 * @returns {JSX.Element} Animated sidebar overlay with eligibility form
 */
const RightSidebar = ({ isOpen, onClose }) => {
  return (
    <>
      {/* 
        Main sidebar panel with full-screen overlay
        - Fixed positioning covers entire viewport
        - Transform animations for slide-in/out effect
        - High z-index to appear above all content
        - Shadow for visual separation
      */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-white-n z-50 transform transition-transform duration-300 ease-in-out space-y-2 shadow-2xl ${
          isOpen ? 'translate-x-0' : 'translate-x-full' // Conditional slide animation
        }`}
      >
        {/* Header section with close button */}
        <div className="flex justify-end">
          {/* 
            Close button using MenuSVG in "close" state
            - Always shows the close icon (X) when openNavigation=true
            - Positioned in top-right corner for easy access
            - Proper accessibility with aria-label
          */}
          <button onClick={onClose} className="p-2" aria-label="Close sidebar">
            <MenuSVG openNavigation={true} />
          </button>
        </div>

        {/* Main content area containing the eligibility form */}
        <div className="px-3 h-full">
          {/* 
            Form container with maximum width and center alignment
            - max-w-2xl: Constrains form width for better readability
            - mx-auto: Centers the form horizontally
            - flex: Enables flexbox layout for the form
          */}
          <div className="max-w-2xl flex mx-auto">
            <EligibilityForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
