import { useState } from "react";
import ReactSimplyCarousel from "react-simply-carousel";

const CarouselComponent = ({ images }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div className="relative w-full overflow-hidden py-8">
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        infinite={true}
        autoplay={true}
        delay={3000}
        speed={500}
        containerProps={{
          className:
            "w-full flex justify-center items-center gap-4 transition-all duration-500",
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
    </div>
  );
}

export default CarouselComponent