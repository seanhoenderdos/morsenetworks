/**
 * Graph Component - Animated bar chart visualization for data display
 *
 * Creates a simple 3-bar chart with gradient-filled bars of increasing height,
 * representing growth or progression. Used in parallax cards and data visualizations.
 *
 * Visual Description:
 * - Three vertical bars with heights: 21px, 27px, 33px (progressive increase)
 * - Each bar is 15px wide with 4px gap between bars
 * - Blue gradient from light blue (#3A86BD) to dark blue (#1B3E57)
 * - Aligned at baseline to show clear progression
 *
 * @returns {JSX.Element} Bar chart visualization with three gradient bars
 */
const Graph = () => {
  return (
    <>
      {/* Container for the bar chart with baseline alignment */}
      <div className="flex gap-1 items-baseline justify-center">
        {/* First bar - shortest (21px height) */}
        <div>
          <svg
            width="15"
            height="21"
            viewBox="0 0 15 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bar rectangle with vertical gradient */}
            <rect width="15" height="21" fill="url(#paint0_linear_10_2)" />
            <defs>
              {/* Vertical gradient from brand blue to dark blue */}
              <linearGradient
                id="paint0_linear_10_2"
                x1="7.5"
                y1="0"
                x2="7.5"
                y2="21"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A86BD" />
                <stop offset="1" stopColor="#1B3E57" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Second bar - medium height (27px height) */}
        <div>
          <svg
            width="15"
            height="27"
            viewBox="0 0 15 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bar rectangle with vertical gradient */}
            <rect width="15" height="27" fill="url(#paint0_linear_10_3)" />
            <defs>
              {/* Vertical gradient from brand blue to dark blue */}
              <linearGradient
                id="paint0_linear_10_3"
                x1="7.5"
                y1="0"
                x2="7.5"
                y2="27"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A86BD" />
                <stop offset="1" stopColor="#1B3E57" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Third bar - tallest (33px height) */}
        <div>
          <svg
            width="15"
            height="33"
            viewBox="0 0 15 33"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Bar rectangle with vertical gradient */}
            <rect width="15" height="33" fill="url(#paint0_linear_10_4)" />
            <defs>
              {/* Vertical gradient from brand blue to dark blue */}
              <linearGradient
                id="paint0_linear_10_4"
                x1="7.5"
                y1="0"
                x2="7.5"
                y2="33"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#3A86BD" />
                <stop offset="1" stopColor="#1B3E57" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </>
  );
};

export default Graph;
