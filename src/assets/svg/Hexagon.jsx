/**
 * Hexagon Component - Decorative hexagonal outline with shadow effect
 *
 * Creates an irregular hexagon shape with a blue outline stroke and drop shadow.
 * Used as a decorative background element in the hero section and other UI components.
 *
 * Visual Description:
 * - Irregular hexagon with slightly rotated/tilted appearance
 * - Blue stroke outline (#3A86BD) with 1px width
 * - Drop shadow effect with 4px offset and 5px blur
 * - Transparent fill to allow content behind to show through
 * - Size: 115x115px viewBox with filter effects extending beyond
 *
 * @returns {JSX.Element} SVG hexagon outline with drop shadow
 */
const Hexagon = () => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="115"
        height="115"
        viewBox="0 0 115 115"
        fill="none"
      >
        {/* Hexagon group with drop shadow filter applied */}
        <g filter="url(#filter0_d_19_348)">
          {/* Irregular hexagon path with blue stroke outline */}
          <path
            d="M41.0267 7.44267L87.776 19.9691C91.3976 20.9395 94.1097 23.9498 94.699 27.6526L100.139 61.8307C100.563 64.4944 99.8345 67.2132 98.1354 69.3081L76.3352 96.1871C73.9734 99.099 70.1198 100.349 66.4982 99.3788L19.7489 86.8523C16.1274 85.882 13.4151 82.8724 12.8256 79.1698L7.3837 44.9912C6.95959 42.3271 7.68816 39.608 9.38753 37.5129L31.1896 10.6343C33.5515 7.72261 37.4052 6.47231 41.0267 7.44267Z"
            stroke="#3A86BD" // Brand blue outline
            shapeRendering="crispEdges" // Ensures clean, crisp edges
          />
        </g>

        {/* Filter definitions for drop shadow effect */}
        <defs>
          <filter
            id="filter0_d_19_348"
            x="0.765751"
            y="0.618439"
            width="113.992"
            height="113.585"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            {/* Create transparent background for shadow */}
            <feFlood floodOpacity="0" result="BackgroundImageFix" />

            {/* Extract alpha channel for shadow calculation */}
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />

            {/* Apply 4px offset to shadow */}
            <feOffset dx="4" dy="4" />

            {/* Blur the shadow with 5px radius */}
            <feGaussianBlur stdDeviation="5" />

            {/* Remove the original shape from shadow */}
            <feComposite in2="hardAlpha" operator="out" />

            {/* Set shadow color to semi-transparent black */}
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />

            {/* Blend shadow with background */}
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_19_348"
            />

            {/* Combine original shape with shadow */}
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_19_348"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </>
  );
};

export default Hexagon;
