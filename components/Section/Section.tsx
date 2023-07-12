import React from "react";
import { MultiCarousel } from "./Carousel";
import { Button } from "@/components/ui/button";

const Section = (props: any) => {
  const title = props.title;
  return (
    <div className="max-w-7xl mx-auto mb-8 px-1 md:px-6">
      <div className="pl-1 mb-3 flex items-center justify-between ">
        <h2 className="font-bold">{title}</h2>
        <Button className={"h-8"} size={"sm"} variant={"outline"}>
          More
        </Button>
      </div>
      <MultiCarousel />
    </div>
  );
};

export default Section;
