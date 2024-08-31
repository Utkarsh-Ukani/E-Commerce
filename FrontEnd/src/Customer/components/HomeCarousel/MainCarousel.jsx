import React from "react";
import { mainCarouselData } from "./MainCarouselData";
import AliceCarousel from "react-alice-carousel";
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = () => {
  const items = mainCarouselData.map((item) => (
    <img
      src={item.image}
      alt=""
      className="cursor-pointer h-[80vh] w-[100vw]"
      role="presentation"
    />
  ));
  return (
    <AliceCarousel mouseTracking items={items} disableButtonsControls autoPlay autoPlayInterval={1500} infinite />
  );
};

export default MainCarousel;
