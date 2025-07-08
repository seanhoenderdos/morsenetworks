import { BsArrowRightCircle } from 'react-icons/bs';
import ButtonSVG from '../assets/svg/ButtonSVG';

/**
 * Button Component - Versatile button/link component with custom SVG background
 *
 * Features:
 * - Can render as either <button> or <a> element based on props
 * - Custom geometric SVG background (ButtonSVG) with multiple color themes
 * - Two visual styles: 'filled' (solid background) and 'outline' (border only)
 * - Optional arrow icon on the right side
 * - Responsive design with customizable padding
 * - Consistent styling across different states and types
 *
 * Props:
 * @param {string} className - Additional CSS classes to apply
 * @param {string} href - If provided, renders as <a> tag for navigation
 * @param {function} onClick - Click handler (only used when rendering as button)
 * @param {ReactNode} children - Button text or content
 * @param {string} px - Custom horizontal padding (defaults to 'px-7')
 * @param {string} color - Theme color ('primary', 'secondary', 'green', 'red', 'gray')
 * @param {string} type - Visual style ('filled' or 'outline')
 * @param {boolean} icon - Whether to show arrow icon on the right
 *
 * @returns {JSX.Element} Button or link element with custom styling
 */
const Button = ({
  className,
  href,
  onClick,
  children,
  px,
  color = 'primary',
  type = 'filled',
  icon,
}) => {
  // Base classes for both button and link variants
  // Uses relative positioning to allow ButtonSVG to position absolutely behind content
  const classes = `relative inline-flex items-center justify-center h-11 bg-transparent border-none outline-none gap-2 ${
    px || 'px-7' // Default horizontal padding, can be overridden
  } ${className || ''}`; // Merge additional classes if provided
  // Determine text color based on button type
  // Outline buttons use gray text to contrast with transparent background
  // Filled buttons use white text to contrast with colored background
  const textColorClass = type === 'outline' ? 'text-gray' : 'text-white';

  // Span classes for button text with proper z-index to appear above SVG background
  const spanClasses = `relative z-10 font-light ${textColorClass}`;

  /**
   * Renders the component as a <button> element
   * Used when no href prop is provided (for form submissions, modal triggers, etc.)
   */
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {/* Custom SVG background positioned absolutely behind content */}
      <ButtonSVG color={color} type={type} />

      {/* Button text with high z-index to appear above SVG */}
      <span className={spanClasses}>{children}</span>

      {/* Optional arrow icon on the right */}
      {icon && (
        <BsArrowRightCircle className={`ml-2 z-10 w-6 h-6 ${textColorClass}`} />
      )}
    </button>
  );

  /**
   * Renders the component as an <a> element
   * Used when href prop is provided (for navigation links)
   */
  const renderLink = () => (
    <a href={href} className={classes}>
      {/* Custom SVG background positioned absolutely behind content */}
      <ButtonSVG color={color} type={type} />

      {/* Link text with high z-index to appear above SVG */}
      <span className={spanClasses}>{children}</span>

      {/* Optional arrow icon on the right */}
      {icon && <BsArrowRightCircle className={`ml-2 ${textColorClass}`} />}
    </a>
  );

  // Conditional rendering: link if href is provided, button otherwise
  return href ? renderLink() : renderButton();
};

export default Button;
