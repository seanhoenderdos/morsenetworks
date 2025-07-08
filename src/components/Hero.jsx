import { ScrollParallax } from 'react-just-parallax';
import { PrimaryTriangle, SecondaryTriangle } from '../assets/svg/Triangles';
import { FirstParalaxCard, SecondParalaxCard } from '../constants';
import Button from './Button';
import { HeroDesign, HeroGradient } from './ui/HeroDesign';

/**
 * Hero Component - Main landing section with parallax effects and decorative elements
 *
 * Features:
 * - Layered background with gradient, hexagons, and triangles
 * - Parallax scrolling cards with business data and testimonials
 * - Responsive typography with emphasized keywords
 * - Call-to-action button for eligibility checking
 * - Complex z-index layering for proper visual hierarchy
 *
 * Visual Elements:
 * - Background gradient for atmospheric effect
 * - Multiple hexagon clusters at different positions and scales
 * - Two decorative triangles with different sizes and effects
 * - Hero image with overlaid parallax cards
 * - Multi-line heading with varied font weights
 * - Descriptive subheading about loan details
 * - Prominent CTA button
 *
 * Props:
 * @param {function} onCheckEligibility - Callback function when CTA button is clicked
 *
 * @returns {JSX.Element} Complete hero section with all visual elements
 */
const Hero = ({ onCheckEligibility }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-7 relative">
      {/* Background gradient for atmospheric depth */}
      <div className="absolute z-0 top-0">
        <HeroGradient />
      </div>

      {/* Decorative hexagon clusters positioned at different locations */}
      {/* Left-side hexagon cluster - larger on desktop, smaller on mobile */}
      <div className="absolute top-0 min-lg:left-50 left-1/8 min-lg:scale-125 scale-3/5">
        <HeroDesign />
      </div>

      {/* Right-side hexagon cluster - positioned lower and to the right */}
      <div className="absolute top-35 min-lg:right-90 right-2/5 min-lg:scale-125 scale-3/5">
        <HeroDesign />
      </div>

      {/* Decorative triangles for geometric background interest */}
      {/* Primary triangle - positioned slightly right of center with z-9 layering */}
      <div className=" absolute flex inset-0 z-9 top-10 justify-center right-5">
        <PrimaryTriangle />
      </div>

      {/* Secondary triangle - larger, positioned behind primary triangle with z-8 layering */}
      <div className=" absolute flex inset-0 z-8 justify-center">
        <SecondaryTriangle />
      </div>

      {/* Main hero image section with parallax cards */}
      <div className="w-full min-lg:w-[400px] z-10">
        {/* Business lady hero image */}
        <img
          src="/src/assets/hero/business-lady.png"
          alt="A business lady"
          className="object-cover mx-auto"
        />

        {/* Parallax cards container - positioned relative to image */}
        <div className="relative">
          {/* First parallax card - business metrics and graph */}
          <ScrollParallax isAbsolutelyPositioned>
            <ul className="absolute w-fit bottom-[150px] left-10 flex flex-col bg-white-n/80 rounded-2xl px-4 py-2">
              {FirstParalaxCard.map(card => (
                <li key={card.id}>
                  {/* Render either a component or image based on card data */}
                  {card.component ? (
                    <card.component />
                  ) : (
                    <img src={card.url} alt="graph" className="w-8 h-8" />
                  )}
                  <p className="text-primary font-normal text-[12px] pt-2">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollParallax>

          {/* Second parallax card - customer testimonials */}
          <ScrollParallax isAbsolutelyPositioned>
            <ul className="flex flex-col absolute w-fit bottom-5 right-10 gap-2 bg-white-n/75 rounded-2xl p-1">
              {SecondParalaxCard.map(card => (
                <li
                  key={card.id}
                  className="flex flex-col items-start gap-1 p-2"
                >
                  {/* Testimonial header with profile image and details */}
                  <div className="flex items-center gap-2">
                    <img
                      src={card.url}
                      alt="profile"
                      className="w-[20px] h-[20px] rounded-full object-cover"
                    />
                    <div className="flex flex-col">
                      <p className="font-medium text-[8px]">{card.title}</p>
                      <p className="font-light text-[8px]">{card.position}</p>
                    </div>
                  </div>
                  {/* Testimonial text */}
                  <p className="font-light text-[12px] text-left">
                    {card.description}
                  </p>
                </li>
              ))}
            </ul>
          </ScrollParallax>
        </div>
      </div>

      {/* Main heading section with typography hierarchy */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* Multi-line heading with varied font weights for emphasis */}
        <h1 className="font-bold text-3xl min-lg:text-5xl leading-tight">
          {/* First line: Bold emphasis on business growth */}
          10x your business <span className="text-primary">growth</span>
          <br />
          {/* Second line: Medium weight for government context */}
          <span className="font-medium">with a government</span>
          <br />
          {/* Third line: Light weight for loan specification */}
          <span className="font-light">backed loan.</span>
        </h1>

        {/* Descriptive subheading with loan program details */}
        <p className="font-light text-xl min-lg:text-2xl text-center">
          Loans from £25,001 to £250,000 for young UK entrepreneurs under the
          new Growth Guarantee Scheme.
        </p>
      </div>

      {/* Call-to-action button with custom styling and click handler */}
      <Button className="p-10 px-14" onClick={onCheckEligibility}>
        Check elligibility
      </Button>
    </div>
  );
};

export default Hero;
