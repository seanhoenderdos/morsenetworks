/**
 * PrimaryTriangle Component - Large decorative triangle with gradient fill
 *
 * Creates a right-angled triangle with gradient fill and drop shadow effect.
 * Used as a background decorative element in the hero section.
 *
 * Visual Description:
 * - Right-angled triangle pointing left (251x285px)
 * - Gradient from dark purple (#271B46) to brand blue (#3A86BD)
 * - Subtle drop shadow with 5px blur for depth
 * - Positioned as background decoration behind other elements
 *
 * @returns {JSX.Element} Large gradient triangle with shadow effect
 */
export const PrimaryTriangle = () => {
  return (
    <svg
      width="251"
      height="285"
      viewBox="0 0 251 285"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle group with drop shadow filter */}
      <g filter="url(#filter0_d_7_30)">
        {/* Triangle path with gradient fill */}
        <path
          d="M240.031 10.3739L240.031 274.941L10.9095 142.657L240.031 10.3739Z"
          fill="url(#paint0_linear_7_30)" // Diagonal gradient fill
        />
      </g>

      {/* Filter and gradient definitions */}
      <defs>
        {/* Drop shadow filter effect */}
        <filter
          id="filter0_d_7_30"
          x="0.909546"
          y="0.37384"
          width="249.122"
          height="284.567"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {/* Create transparent background */}
          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          {/* Extract alpha channel for shadow */}
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />

          {/* No offset for this shadow */}
          <feOffset />

          {/* Apply 5px blur to shadow */}
          <feGaussianBlur stdDeviation="5" />

          {/* Remove original shape from shadow */}
          <feComposite in2="hardAlpha" operator="out" />

          {/* Set shadow to semi-transparent black */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />

          {/* Blend shadow with background */}
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_30"
          />

          {/* Combine shape with shadow */}
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7_30"
            result="shape"
          />
        </filter>

        {/* Diagonal gradient from dark purple to blue */}
        <linearGradient
          id="paint0_linear_7_30"
          x1="240.031" // Start at top right
          y1="10.3739"
          x2="87.2834" // End at bottom left area
          y2="274.941"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#271B46" /> {/* Dark purple start */}
          <stop offset="1" stopColor="#3A86BD" /> {/* Brand blue end */}
        </linearGradient>
      </defs>
    </svg>
  );
};

/**
 * SecondaryTriangle Component - Larger decorative triangle with complex shadow
 *
 * Creates a larger right-angled triangle with solid fill and complex shadow effects.
 * Used as a secondary background element, positioned behind the primary triangle.
 *
 * Visual Description:
 * - Right-angled triangle pointing left (275x316px) - larger than primary
 * - Solid dark purple fill (#271B46)
 * - Complex shadow with both drop shadow and inner shadow effects
 * - 4px vertical offset with 2px blur for drop shadow
 * - Inner shadow with 10px blur for depth
 *
 * @returns {JSX.Element} Large triangle with complex shadow effects
 */
export const SecondaryTriangle = () => {
  return (
    <svg
      width="275"
      height="316"
      viewBox="0 0 275 316"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Triangle group with complex shadow filter */}
      <g filter="url(#filter0_di_7_32)">
        {/* Triangle path with solid dark purple fill */}
        <path
          d="M270.56 0.663902L270.56 307.805L4.56783 154.234L270.56 0.663902Z"
          fill="#271B46" // Solid dark purple fill
        />
      </g>

      {/* Complex filter definition with drop and inner shadows */}
      <defs>
        <filter
          id="filter0_di_7_32"
          x="0.567825"
          y="0.663902"
          width="273.992"
          height="315.141"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          {/* Create transparent background */}
          <feFlood floodOpacity="0" result="BackgroundImageFix" />

          {/* Extract alpha for shadow calculations */}
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />

          {/* Apply 4px vertical offset for drop shadow */}
          <feOffset dy="4" />
          {/* Apply 2px blur to drop shadow */}
          <feGaussianBlur stdDeviation="2" />

          {/* Remove original shape from shadow */}
          <feComposite in2="hardAlpha" operator="out" />

          {/* Set drop shadow to semi-transparent black */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />

          {/* Blend drop shadow with background */}
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_7_32"
          />

          {/* Combine shape with drop shadow */}
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_7_32"
            result="shape"
          />

          {/* Create inner shadow effect */}
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />

          {/* No offset for inner shadow */}
          <feOffset />

          {/* Apply 10px blur to inner shadow */}
          <feGaussianBlur stdDeviation="10" />

          {/* Create inner shadow by inverting the shape */}
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />

          {/* Set inner shadow to stronger opacity */}
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
          />

          {/* Blend inner shadow with the shape */}
          <feBlend
            mode="normal"
            in2="shape"
            result="effect2_innerShadow_7_32"
          />
        </filter>
      </defs>
    </svg>
  );
};
