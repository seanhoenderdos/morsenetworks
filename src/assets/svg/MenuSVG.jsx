/**
 * MenuSVG Component - Animated hamburger menu icon with hexagon background
 *
 * Features:
 * - Hexagonal background shape with gradient fill
 * - Transforms from hamburger menu (≡) to close icon (×) based on navigation state
 * - Smooth CSS transitions for rotation and position changes
 * - Uses transform-origin center for proper rotation animation
 *
 * @param {boolean} openNavigation - Controls the menu icon state (hamburger vs close)
 */
const MenuSVG = ({ openNavigation = false }) => {
  return (
    <>
      <svg
        className="overflow-visible"
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="38"
        viewBox="0 0 45 38"
        fill="none"
      >
        {/* Hexagonal background shape */}
        <path
          d="M30.032 0C33.9782 0 37.5555 2.32123 39.1638 5.9248L43.1805 14.9248C44.3379 17.5185 44.3379 20.4815 43.1805 23.0752L39.1638 32.0752C37.5555 35.6788 33.9782 38 30.032 38H14.9676C11.1451 37.9998 7.66873 35.822 5.99295 32.4102L5.8367 32.0762L1.81912 23.0762C0.661328 20.4822 0.661328 17.5178 1.81912 14.9238L5.8367 5.92383C7.4451 2.32076 11.0218 0.000247978 14.9676 0H30.032ZM14.9676 2C11.8109 2.00025 8.94953 3.85673 7.66287 6.73926L3.64529 15.7393C2.71912 17.8143 2.71912 20.1857 3.64529 22.2607L7.66287 31.2607C8.94953 34.1433 11.8109 35.9998 14.9676 36H30.032C33.1889 36 36.0509 34.1435 37.3377 31.2607L41.3543 22.2607C42.2804 20.1857 42.2804 17.8143 41.3543 15.7393L37.3377 6.73926C36.0509 3.85652 33.1889 2 30.032 2H14.9676Z"
          fill="url(#paint0_linear_menu)"
        />

        {/* Animated hamburger menu lines */}
        <g transform="translate(12.5, 13)">
          {/* Top line - rotates 45 degrees and moves to center when navigation is open */}
          <rect
            className="transition-all duration-300 ease-in-out"
            x="0"
            y={openNavigation ? '5' : '0'}
            width="20"
            height="2"
            rx="1"
            fill="#1B3E57"
            style={{
              transformOrigin: '10px 5px',
              transform: `rotate(${openNavigation ? '45deg' : '0deg'})`,
            }}
          />

          {/* Bottom line - rotates -45 degrees and moves to center when navigation is open */}
          <rect
            className="transition-all duration-300 ease-in-out"
            x="0"
            y={openNavigation ? '5' : '10'}
            width="20"
            height="2"
            rx="1"
            fill="#1B3E57"
            style={{
              transformOrigin: '10px 5px',
              transform: `rotate(${openNavigation ? '-45deg' : '0deg'})`,
            }}
          />

          {/* Middle line - fades out when navigation is open */}
          <rect
            className="transition-all duration-300 ease-in-out"
            x="0"
            y="5"
            width="20"
            height="2"
            rx="1"
            fill="#1B3E57"
            style={{
              opacity: openNavigation ? '0' : '1',
            }}
          />
        </g>

        {/* Gradient definition for hexagon background */}
        <defs>
          <linearGradient
            id="paint0_linear_menu"
            x1="22.4999"
            y1="0"
            x2="22.4999"
            y2="38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#3A86BD" />
            <stop offset="1" stopColor="#1B3E57" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default MenuSVG;
