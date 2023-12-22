import React, { useState } from "react";
import { Projects } from "../api/Projects";
import { Carousel } from "./Carousel";

import { ChevronLeft, ChevronRight } from "react-feather";
import { DetailsProject } from "../page/DetailsProject";

export const Project = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const secondColor = {
    color: "var(--second-color)",
  };

  return (
    <div className="px-14 xl:px-32 py-10 lg:px-20 md:px-20 sm:px-16 h-full component">
      <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold text-white text-center">
        Lastest <span style={secondColor}>Project</span>
      </h2>
      <div className="mt-14 flex justify-center h-full">
        <Carousel projects={Projects} setOpenModal={setOpenModal} />
      </div>
      <DetailsProject openModal={openModal} setOpenModal={setOpenModal} />
    </div>
  );
};
