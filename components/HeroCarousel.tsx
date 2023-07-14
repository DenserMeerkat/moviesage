"use client";
import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import { DotProps } from "react-multi-carousel/lib/types";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { useMediaQuery } from "react-responsive";

const HeroCarousel = () => {
  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const carouselRef = useRef<Carousel>(null);
  const list = [0, 1, 2, 3, 4];
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
    if (carouselRef.current) {
      carouselRef.current.goToSlide(index);
      setActiveSlide(index);
    }
  };
  const handleAfterChange = (
    previousSlide: number,
    { currentSlide }: { currentSlide: number }
  ) => {
    if (currentSlide === list.length - 1) {
      setTimeout(() => {
        if (carouselRef.current) {
          carouselRef.current.goToSlide(0, false);
        }
      }, 2500);
    }
  };
  const handleBeforeChange = (
    nextSlide: number,
    { currentSlide }: { currentSlide: number }
  ) => {
    setActiveSlide(nextSlide);
  };
  if (!domLoaded) return null;
  else
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
            ref={carouselRef}
            className="z-0"
            ssr={true}
            swipeable={true}
            draggable={true}
            autoPlay={true}
            showDots={true}
            autoPlaySpeed={2500}
            customDot={<CustomDot />}
            responsive={responsive}
            afterChange={handleAfterChange}
            beforeChange={handleBeforeChange}
            shouldResetAutoplay={true}
            removeArrowOnDeviceType={["tablet", "mobile"]}
            renderButtonGroupOutside={true}
          >
            {list.map((item: number, index: number) => (
              <div
                key={index}
                className=" aspect-video flex items-center justify-center
               border bg-zinc-100 dark:bg-zinc-800 overflow-clip"
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
  const commonTail = `w-48 mr-2 md:w-full border md:mb-3 rounded-sm transition-colors`;
  const activeTail = `${commonTail} bg-slate-200 dark:bg-slate-400/[0.3]`;
  const inactiveTail = `${commonTail} bg-slate-100 dark:bg-slate-500/[0.3]`;
  return (
    <div
      className={`${className} hidden md:flex md:flex-col md:h-full items-center`}
    >
      {slides.map((slide: any, index: number) => (
        <div
          key={index}
          className={activeSlide === index ? activeTail : inactiveTail}
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

const CustomDot = ({ index, active, onClick, carouselState }: DotProps) => {
  const activeDotStyles = `w-3 h-2 border rounded-full mx-1 mb-3 bg-zinc-900 dark:bg-zinc-200 transition-all`;
  const dotStyles = `w-2 h-2 rounded-full mx-1 mb-3 bg-zinc-300 dark:bg-zinc-700 transition-all`;
  return (
    <button
      className={active ? activeDotStyles : dotStyles}
      onClick={onClick}
    />
  );
};
