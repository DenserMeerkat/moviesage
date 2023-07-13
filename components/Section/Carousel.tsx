"use client";
import React from "react";
import CarouselItem from "./CarouselItem";

import Carousel from "react-multi-carousel";

export const MultiCarousel = () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2,
      partialVisibilityGutter: 10,
    },
  };
  return (
    <Carousel
      className="z-0"
      ssr={true}
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      transitionDuration={500}
      customTransition="transform 500ms ease-in-out"
      infinite={false}
      partialVisible={true}
    >
      {list.map((item: number, index: number) => (
        <CarouselItem key={index} title={item} />
      ))}
    </Carousel>
  );
};
