/**
 * ButtonSVG Component - Custom SVG background for buttons with geometric design
 *
 * Creates a hexagonal/diamond-shaped button background that can be rendered
 * in different colors and styles (filled or outlined).
 *
 * Visual Description:
 * - Creates an angular, geometric button shape with slanted edges
 * - Left and right sides have diagonal cuts creating a modern appearance
 * - Background is positioned absolutely to fill the entire button container
 *
 * @param {string} color - Color theme for the button ('primary', 'secondary', 'green', 'red', 'gray')
 * @param {string} type - Button style ('filled' for solid background, 'outline' for border only)
 * @returns {JSX.Element} SVG element with geometric button background
 */
const ButtonSVG = ({ color = 'primary', type = 'filled' }) => {
  // Color palette mapping for different button states and themes
  const colorMap = {
    primary: '#3A86BD', // Main brand blue
    secondary: '#271B46', // Dark purple/navy
    green: '#3BD277', // Success green
    red: '#D94040', // Error/danger red
    gray: '#D9D9D9', // Neutral gray
  };

  // Get the fill color from the map, fallback to primary if color not found
  const fillColor = colorMap[color] || colorMap.primary;

  // Render outline version of the button (border only, transparent fill)
  if (type === 'outline') {
    return (
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        width="213"
        height="48"
        viewBox="0 0 213 48"
        fill="none"
      >
        {/* Geometric button shape with diagonal edges and transparent fill */}
        <path
          d="M13.822 3.90738C15.7147 1.44388 18.645 0 21.7516 0H193.416C196.772 0 199.904 1.68336 201.756 4.48218L211.272 18.8655C213.524 22.2698 213.482 26.7013 211.164 30.0613L201.772 43.678C199.905 46.3842 196.827 48 193.54 48H21.6265C18.5909 48 15.7196 46.6211 13.8217 44.2518L2.90487 30.6232C0.0252044 27.0282 -0.0263685 21.9313 2.77997 18.2788L13.822 3.90738Z"
          fill="transparent"
          stroke="#D9D9D9" // Gray border for outline style
          strokeWidth="2"
        />
      </svg>
    );
  }

  // Render filled version of the button (solid background color)
  return (
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      width="213"
      height="48"
      viewBox="0 0 213 48"
      fill="none"
    >
      {/* Geometric button shape with diagonal edges and solid fill */}
      <path
        d="M13.822 3.90738C15.7147 1.44388 18.645 0 21.7516 0H193.416C196.772 0 199.904 1.68336 201.756 4.48218L211.272 18.8655C213.524 22.2698 213.482 26.7013 211.164 30.0613L201.772 43.678C199.905 46.3842 196.827 48 193.54 48H21.6265C18.5909 48 15.7196 46.6211 13.8217 44.2518L2.90487 30.6232C0.0252044 27.0282 -0.0263685 21.9313 2.77997 18.2788L13.822 3.90738Z"
        fill={fillColor} // Dynamic fill color based on the 'color' prop
      />
    </svg>
  );
};

export default ButtonSVG;
