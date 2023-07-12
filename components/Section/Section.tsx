import React from "react";
import { MultiCarousel } from "./Carousel";
import { Button } from "@/components/ui/button";

const Section = (props: any) => {
  const title = props.title;
  return (
    <div className="max-w-7xl mx-auto mb-8 px-1 md:px-6">
      <div className="pl-1 mb-3 flex items-end justify-between ">
        <h2 className="text-xs md:text-sm font-medium">{title}</h2>
        <Button className={"h-6 md:h-8"} size={"sm"} variant={"outline"}>
          <p className="text-xs md:text-sm">More</p>
        </Button>
      </div>
      <MultiCarousel />
    </div>
  );
};

export default Section;
