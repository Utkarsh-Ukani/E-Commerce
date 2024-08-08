import React, { useState, useRef } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import { Button } from "@mui/material";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarousel = ({data,sectionName}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const carouselRef = useRef(null); // Ref to control AliceCarousel

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    720: { items: 3 },
    1024: { items: 5.5 },
  };

  const slidePrev = () => {
    if (activeIndex > 0) {
      console.log("Prev Clicked, Active Index:", activeIndex);
      setActiveIndex(activeIndex - 1);
      carouselRef.current.slidePrev(); // Use AliceCarousel's slidePrev method
    }
  };

  const slideNext = () => {
    if (activeIndex < items.length - 1) {
      console.log("Next Clicked, Active Index:", activeIndex);
      setActiveIndex(activeIndex + 1);
      carouselRef.current.slideNext(); // Use AliceCarousel's slideNext method
    }
  };

  const syncActiveIndex = ({ item }) => {
    console.log("Slide Changed, Active Index:", item);
    setActiveIndex(item);
  };

  const items = data.slice(0,10).map((item) => <HomeSectionCard product={item} />);
  
  return (
    <div>
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">{sectionName}</h2>
      <div className="relative p-5">
        <AliceCarousel
          ref={carouselRef}
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChanged={syncActiveIndex}
          activeIndex={activeIndex}
          autoPlay={false}
        />
        {activeIndex < items.length - 5 && (
          <Button
            className="z-50"
            onClick={slideNext}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="next"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(90deg)", color: "black" }}
            />
          </Button>
        )}
        {activeIndex > 0 && (
          <Button
            className="z-50"
            onClick={slidePrev}
            variant="contained"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%) rotate(90deg)",
              bgcolor: "white",
            }}
            aria-label="prev"
          >
            <KeyboardArrowLeftIcon
              sx={{ transform: "rotate(-90deg)", color: "black" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeSectionCarousel;
