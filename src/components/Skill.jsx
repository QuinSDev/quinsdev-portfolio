import React from "react";
import { SkillSlider } from "./SkillSlider";
import { SkillItems } from "../api/SkillItems";

export const Skill = () => {
  const secondColor = {
    color: "var(--second-color)",
  };

  const cloneSkillItems = [...SkillItems, ... SkillItems]

  return (
    <div className="pt-16 xl:px-32 lg:px-20 h-full">
      <h2 className="lg:text-5xl font-bold lg:text-center" style={secondColor}>
        Skills
      </h2>
      <p className="mt-8 lg:text-xl lg:text-center text-white">
        Como desarrollador, mi entusiasmo y pasión por la tecnología me han
        llevado a trabajar en proyectos desafiantes y enriquecedores. A lo largo
        de todo este camino, he adquirido experiencia con tecnologías clave,
        tales como:
      </p>
      <div className="xl:py-20 lg:py-16 w-full overflow-hidden">
        <SkillSlider>{cloneSkillItems}</SkillSlider>
      </div>
    </div>
  );
};
