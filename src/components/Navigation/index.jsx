import { useEffect, useRef, useState } from 'react';
import MenuSVG from './../../assets/svg/MenuSVG';
import { navigation } from './../../constants/index';

/**
 * Navbar Component - Responsive navigation header with scroll behavior
 *
 * Features:
 * - Fixed positioning at top of page
 * - Auto-hide/show on scroll (hides when scrolling down, shows when scrolling up)
 * - Responsive design (mobile hamburger menu, desktop horizontal nav)
 * - Smooth transitions and backdrop blur effects
 * - Dynamic background opacity based on navigation state
 *
 * Behavior:
 * - Always visible at top of page (scroll position < 10px)
 * - Hides when scrolling down past 50px
 * - Shows when scrolling up
 * - Mobile: overlay navigation with full-screen menu
 * - Desktop: horizontal navigation bar with blur background
 *
 * @returns {JSX.Element} Responsive navigation component
 */
const Navbar = () => {
  // State for mobile navigation menu (open/closed)
  const [openNavigation, setopenNavigation] = useState(false);

  // State for navbar visibility based on scroll direction
  const [isVisible, setIsVisible] = useState(true);

  // Ref to track last scroll position for scroll direction detection
  const lastScrollY = useRef(0);

  // Effect hook to handle scroll-based navbar visibility
  useEffect(() => {
    /**
     * Handles scroll events to show/hide navbar based on scroll direction
     *
     * Logic:
     * - Always show at top (< 10px)
     * - Hide when scrolling down past 50px
     * - Show when scrolling up from any position
     */
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Always show navbar when near the top of the page
      if (currentScrollY < 10) {
        setIsVisible(true);
      }
      // Hide navbar when scrolling down past 50px threshold
      else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
        setIsVisible(false);
      }
      // Show navbar when scrolling up (regardless of position)
      else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      }

      // Update last scroll position for next comparison
      lastScrollY.current = currentScrollY;
    };

    // Add scroll listener with passive option for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array - effect runs once on mount

  /**
   * Toggles the mobile navigation menu between open and closed states
   * Used by the hamburger menu button on mobile devices
   */
  const toggleNavigation = () => {
    if (openNavigation) {
      setopenNavigation(false);
    } else {
      setopenNavigation(true);
    }
  };

  /**
   * Handles clicks on navigation links in mobile menu
   * Automatically closes the mobile menu when a link is clicked
   * Only acts when navigation is currently open
   */
  const handleClick = () => {
    if (!openNavigation) return;
    setopenNavigation(false);
  };

  return (
    /* 
      Main navbar container with:
      - Fixed positioning at top of viewport
      - Dynamic background based on navigation state and device
      - Smooth transform transitions for show/hide behavior
      - High z-index (50) to stay above other content
    */
    <div
      className={`fixed top-0 left-0 w-full z-50 lg:bg-white-n lg:backdrop-blur-sm transition-transform duration-300 ${
        openNavigation ? 'bg-white' : 'bg-white-n backdrop-blur-3xl'
      } ${isVisible ? 'lg:translate-y-0' : 'lg:-translate-y-full'}`}
    >
      {/* Inner container with responsive padding */}
      <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
        {/* Logo/Brand section - left side */}
        <a className="flex justify-between w-[12rem] xl:mr-8" href="#hero">
          <p className="text-secondary font-bold text-xl w-full">
            HM Government
          </p>
        </a>

        {/* 
          Navigation menu section:
          - Hidden by default on mobile (hamburger menu)
          - Full-screen overlay when open on mobile
          - Horizontal layout on desktop with auto margins for centering
        */}
        <nav
          className={`${
            openNavigation ? 'flex' : 'hidden'
          } fixed top-[4rem] left-0 right-0 bottom-0 bg-white lg:static lg:flex lg:mx-auto lg:bg-transparent`}
        >
          {/* Navigation items container with responsive layout */}
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* 
              Dynamic navigation links from constants
              Each link has responsive styling and conditional visibility
            */}
            {navigation.map(item => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick} // Close mobile menu on click
                className={`block relative text-2xl text-primary hover:text-secondary ${
                  item.onlyMobile ? 'lg:hidden' : '' // Hide desktop-only items on mobile
                } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-light ${
                  item.url === '#hero'
                    ? 'z-2 lg:text-primary' // Special styling for hero/home link
                    : 'lg:text-secondary'
                } lg:leading-5 lg:hover:text-primary xl:px-12`}
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        {/* 
          Mobile hamburger menu button:
          - Only visible on mobile (lg:hidden)
          - Positioned on the right side with auto margin
          - Uses custom MenuSVG component with animation
        */}
        <a className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSVG openNavigation={openNavigation} />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
