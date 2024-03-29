import React, { useState } from "react";
import { Projects } from "../api/Projects";
import { Carousel } from "./Carousel";

import { ChevronLeft, ChevronRight } from "react-feather";
import { DetailsProject } from "../page/DetailsProject";

export const Project = () => {
  const [openModal, setOpenModal] = useState(false);
  
  const secondColor = {
    color: "var(--second-color)",
  };

  return (
    <div className="px-14 xl:px-32 py-10 lg:px-20 md:px-20 sm:px-16 h-full component">
      <h2 className="2xl:mt-0 md:mt-8 md:text-5xl sm:text-4xl text-3xl font-bold text-white text-center">
        Últimos <span style={secondColor}>Proyectos</span>
      </h2>
      <div className="mt-24 flex justify-center h-full">
        <Carousel projects={Projects} setOpenModal={setOpenModal} />
      </div>
      <DetailsProject openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
