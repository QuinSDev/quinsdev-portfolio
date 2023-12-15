import React, { useState } from "react";
import { Projects } from "../api/Projects";
import { Carousel } from "./Carousel";
import { ChevronLeft, ChevronRight } from "react-feather";

export const Project = () => {
  const secondColor = {
    color: "var(--second-color)",
  };

  const [activeIndex, setActiveIndex] = useState(0); // Índice de la tarjeta activa

  const prev = () => setActiveIndex((curr) => (curr === 0 ? Projects.length - 1 : curr - 1));
  const next = () => setActiveIndex((curr) => (curr === Projects.length - 1 ? 0 : curr + 1));

  return (
    <div className="xl:px-32 py-8 lg:px-20 md:px-20 h-full component">
      <h2 className="text-5xl font-bold text-white text-center">
        Lastest <span style={secondColor}>Project</span>
      </h2>
      <div className="mt-4 flex justify-center relative h-full">
        <Carousel projects={Projects} activeIndex={activeIndex} />
        <div className="absolute inset-0 flex justify-between items-center px-28 lg:px-2">
        <button onClick={prev} className="pr-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ChevronLeft size={35} />
          </button>
          <button onClick={next} className="pl-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white">
            <ChevronRight size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};
