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
      slidesToSlide: 1,
      partialVisibilityGutter: 20,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 1,
      partialVisibilityGutter: 10,
    },
  };
  return (
    <Carousel
      className="z-0"
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      removeArrowOnDeviceType={["tablet", "mobile"]}
      infinite={false}
      ssr={true}
      partialVisbile={true}
    >
      {list.map((item: number, index: number) => (
        <CarouselItem key={index} title={item} />
      ))}
    </Carousel>
  );
};
