import Hexagon from '../../assets/svg/Hexagon';

/**
 * HeroDesign Component - Decorative hexagon pattern for hero section
 *
 * Creates a cluster of three hexagonal shapes positioned at different offsets
 * to form an attractive geometric pattern. Used as background decoration
 * in the hero section to add visual interest and depth.
 *
 * Visual Description:
 * - Three hexagon SVGs arranged in a triangular cluster pattern
 *
 * Usage:
 * - Positioned as background decoration in hero section
 * - Scaled responsively (scale-3/5 on mobile, scale-125 on desktop)
 * - Multiple instances can be placed at different positions
 *
 * @returns {JSX.Element} Cluster of three positioned hexagon shapes
 */
export const HeroDesign = () => {
  return (
    // Container with relative positioning for absolute child positioning
    <div className="relative">
      {/* Main hexagon at origin position (base layer) */}
      <div className="absolute inset-0">
        <Hexagon />
      </div>

      {/* Second hexagon positioned down and right (middle layer) */}
      <div className="absolute top-18 left-18">
        <Hexagon />
      </div>

      {/* Third hexagon positioned down and left (top layer) */}
      <div className="absolute top-23 -left-7">
        <Hexagon />
      </div>
    </div>
  );
};

/**
 * HeroGradient Component - Subtle radial gradient background effect
 *
 * Creates a soft, circular gradient background that adds atmospheric depth
 * to the hero section without being too prominent or distracting.
 *
 * Visual Description:
 * - Large circular gradient (384x384px / w-96 h-96)
 * - Radial gradient from center outward
 * - Starts with gray color (#98969F) at center (0%)
 * - Fades to transparent at edges (100%)
 * - Creates subtle atmospheric lighting effect
 *
 * Technical Details:
 * - Uses CSS custom property --gray as fallback color
 * - Elliptical gradient shape (50% width, 50% height)
 * - Positioned at center (50%, 50%)
 * - Rounded to perfect circle with rounded-full
 *
 * Usage:
 * - Positioned as background element behind other hero content
 * - Provides subtle depth and visual interest
 * - Should be placed with appropriate z-index layering
 *
 * @returns {JSX.Element} Circular radial gradient background element
 */
export const HeroGradient = () => {
  return (
    // Large circular div with radial gradient background
    // - w-96 h-96: 384x384px dimensions
    // - bg-[...]: Custom radial gradient using Tailwind arbitrary values
    // - rounded-full: Perfect circle shape
    <div className="w-96 h-96 bg-[radial-gradient(ellipse_50.00%_50.00%_at_50.00%_50.00%,_var(--gray,_#98969F)_0%,_rgba(115,_115,_115,_0)_100%)] rounded-full" />
  );
};
