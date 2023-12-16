import React from "react";
import { SkillSlider } from "./SkillSlider";
import { SkillItems } from "../api/SkillItems";

export const Skill = () => {
  const secondColor = {
    color: "var(--second-color)",
  };

  const cloneSkillItems = [...SkillItems, ... SkillItems]

  return (
    <div className="sm:pt-16 pt-10 xl:px-32 md:px-20 sm:px-16 px-8 h-full">
      <h2 className="md:text-5xl sm:text-4xl text-3xl font-bold text-center" style={secondColor}>
        Skills
      </h2>
      <p className="sm:mt-8 mt-6 md:text-xl text-center text-base text-white">
        Como desarrollador, mi entusiasmo y pasión por la tecnología me han
        llevado a trabajar en proyectos desafiantes y enriquecedores. A lo largo
        de todo este camino, he adquirido experiencia con tecnologías clave,
        tales como:
      </p>
      <div className="xl:py-20 md:py-16 sm:py-12 py-8 w-full overflow-hidden">
        <SkillSlider>{cloneSkillItems}</SkillSlider>
      </div>
    </div>
  );
};
