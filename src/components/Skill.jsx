import React from "react";
import { SkillSlider } from "./SkillSlider";
import { SkillItems } from "../api/SkillItems";

export const Skill = () => {
  const secondColor = {
    color: "var(--second-color)",
  };

  const cloneSkillItems = [...SkillItems, ... SkillItems]

  return (
    <div className="pt-16 xl:px-32 md:px-20 sm:px-16 h-full">
      <h2 className="md:text-5xl sm:text-4xl font-bold md:text-center sm:text-center" style={secondColor}>
        Skills
      </h2>
      <p className="mt-8 md:text-xl md:text-center sm:text-center text-white">
        Como desarrollador, mi entusiasmo y pasión por la tecnología me han
        llevado a trabajar en proyectos desafiantes y enriquecedores. A lo largo
        de todo este camino, he adquirido experiencia con tecnologías clave,
        tales como:
      </p>
      <div className="xl:py-20 md:py-16 sm:py-12 w-full overflow-hidden">
        <SkillSlider>{cloneSkillItems}</SkillSlider>
      </div>
    </div>
  );
};
