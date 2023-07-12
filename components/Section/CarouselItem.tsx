import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const CarouselItem = (props: any) => {
  const title = props.title;
  return (
    <div className="border bg-zinc-100 dark:bg-zinc-800 rounded-sm md:rounded-md overflow-clip mr-2 md:mr-3 lg:mr-4">
      <AspectRatio ratio={16 / 9} className="flex items-center justify-center">
        <p className="text-2xl md:text-4xl lg:text-6xl xl:text-8xl opacity-5 select-none">
          {title}
        </p>
      </AspectRatio>
    </div>
  );
};

export default CarouselItem;
