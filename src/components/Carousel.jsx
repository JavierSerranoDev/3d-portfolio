import { useState, useRef } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const CarouselComponent = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [activeDotIndex, setActiveDotIndex] = useState(0);
  const dotTimerRef = useRef(null);

  const handleSlideChange = (index) => {
    setActiveSlideIndex(index);

    // Clear any pending dot update
    if (dotTimerRef.current) clearTimeout(dotTimerRef.current);

    // Update dot after the slide animation completes
    dotTimerRef.current = setTimeout(() => {
      setActiveDotIndex(index);
    }, 3000); // match speed
  };

  return (
    <div className="relative w-full overflow-hidden py-8">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={handleSlideChange}
        itemsToShow={1}
        itemsToScroll={1}
        infinite={true}
        autoplay={true}
        autoplayDirection="forward"
        delay={3000}
        speed={400}
        easing="ease-in-out"
        containerProps={{
          className: "w-full flex justify-center items-center gap-4 transition-all duration-500",
        }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-[90vw] md:w-[45vw] xl:w-[30vw] transition-transform"
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          </div>
        ))}
      </ReactSimplyCarousel>

      {/* Dots */}
      <div className="flex justify-center items-center gap-2 mt-2" style={{ height: '1.5rem' }}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSlideChange(index)}
            style={{
              width: activeDotIndex === index ? '1rem' : '0.5rem',
              height: activeDotIndex === index ? '1rem' : '0.5rem',
              backgroundColor: activeDotIndex === index ? '#d9ecff' : '#2d2d38',
              border: activeDotIndex === index ? '2px solid #839cb5' : '2px solid #1c1c21',
              borderRadius: '50%',
              transition: 'all 0.4s ease-in-out',
              cursor: 'pointer',
              padding: 0,
              flexShrink: 0,
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default CarouselComponent