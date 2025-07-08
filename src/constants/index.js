import profilePic from '../assets/hero/profile-pic.jpg';
import Graph from '../assets/svg/Graph';

/**
 * Constants File - Application-wide configuration and data structures
 *
 * This file exports constant data used throughout the application including:
 * - Navigation menu configuration
 * - Parallax card content for hero section
 * - Static content and testimonials
 *
 * Benefits of centralizing constants:
 * - Single source of truth for content
 * - Easy content updates and maintenance
 * - Consistent data structure across components
 * - Better organization and code reusability
 */

/**
 * Navigation Configuration
 *
 * Defines the main navigation menu items displayed in the header.
 * Each item represents a section of the website that users can navigate to.
 *
 * Structure:
 * - id: Unique identifier for React keys and potential tracking
 * - title: Display text shown in the navigation menu
 * - url: Anchor link or route to the corresponding section
 *
 * Usage: Used by the Navigation component to render menu items
 * Note: IDs are not sequential (missing '1') - this might be intentional
 *       or could indicate a removed/planned navigation item
 */
export const navigation = [
  {
    id: '0',
    title: 'Growth Guarantee Scheme', // Main program information section
    url: '#about',
  },
  {
    id: '2',
    title: 'Who can apply?', // Eligibility criteria section
    url: '#applications',
  },
  {
    id: '3',
    title: 'How it works', // Process explanation section
    url: '#howitworks',
  },
  {
    id: '4',
    title: 'Testimonials', // Customer success stories section
    url: '#testimonials',
  },
  {
    id: '5',
    title: 'FAQs', // Frequently asked questions section
    url: '#faqs',
  },
];

/**
 * First Parallax Card Configuration
 *
 * Defines content for the left-side parallax card in the hero section.
 * This card displays business growth metrics with a visual graph component.
 *
 * Structure:
 * - id: Unique identifier for React rendering
 * - component: React component to render (Graph SVG component)
 * - description: Text description displayed below the component
 *
 * Visual Purpose:
 * - Shows business growth statistics (25% improvement)
 * - Uses the Graph component to visualize progress
 * - Positioned on the left side of the hero image
 * - Semi-transparent background for overlay effect
 */
export const FirstParalaxCard = [
  {
    id: '1',
    component: Graph, // Renders the 3-bar growth chart
    description: '25%', // Growth percentage metric
  },
];

/**
 * Second Parallax Card Configuration
 *
 * Defines content for the right-side parallax card in the hero section.
 * This card displays customer testimonials with profile information.
 *
 * Structure:
 * - id: Unique identifier for React rendering
 * - url: Profile image path for the testimonial author
 * - title: Customer name
 * - position: Job title and company information
 * - description: Testimonial quote or key metric
 *
 * Visual Purpose:
 * - Shows social proof through customer success
 * - Includes profile photo for credibility
 * - Positioned on the right side of the hero image
 * - Demonstrates real-world results ("20x'd ours")
 */
export const SecondParalaxCard = [
  {
    id: '2',
    url: profilePic, // Customer profile image
    title: 'Mike Edward', // Customer name
    position: 'CEO at Techy', // Job title and company
    description: "We 20x'd ours.", // Success metric/testimonial
  },
];
