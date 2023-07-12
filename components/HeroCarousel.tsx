"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useMediaQuery } from "react-responsive";

const HeroCarousel = () => {
  const isNonMobile = useMediaQuery({ minWidth: 768 });
  const list = [1, 2, 3, 4, 5];
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const [activeSlide, setActiveSlide] = React.useState(0);

  const handleThumbClick = (index: number) => {
    setActiveSlide(index);
  };
  return (
    <div className="px-0 py-0 md:py-4 md:px-6 mb-4 md:mb-8 max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-center gap-4 ">
      <CarouselThumbs
        className="md:w-[12%]"
        slides={list}
        activeSlide={activeSlide}
        onClick={handleThumbClick}
      />
      <div className="md:max-w-[1000px] aspect-video h-full w-full md:w-[80%] lg:w-[75%] xl:w-[70%] md:rounded-sm overflow-clip">
        <Carousel
          className="z-0"
          swipeable={true}
          draggable={true}
          showDots={isNonMobile ? false : true}
          autoPlay={true}
          responsive={responsive}
          infinite={false}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          renderButtonGroupOutside={true}
        >
          {list.map((item: number, index: number) => (
            <div
              key={index}
              className=" aspect-video flex items-center justify-center
               bg-zinc-300 dark:bg-zinc-800 overflow-clip"
            >
              <p className="text-8xl opacity-5 select-none">{item}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HeroCarousel;

const CarouselThumbs = (props: any) => {
  const { className, slides, activeSlide, onClick } = props;
  return (
    <div
      className={`${className} hidden md:flex md:flex-col md:h-full items-center`}
    >
      {slides.map((slide: any, index: number) => (
        <div
          key={index}
          className={`w-48 mr-2 md:w-full bg-slate-300 dark:bg-slate-500/[0.3] md:mb-3 rounded-sm`}
          onClick={() => onClick(index)}
        >
          <AspectRatio
            ratio={16 / 9}
            className="flex items-center justify-center"
          >
            <p className="opacity-20 select-none">{slide}</p>
          </AspectRatio>
        </div>
      ))}
    </div>
  );
};
