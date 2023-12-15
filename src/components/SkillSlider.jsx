import React, { useEffect, useRef } from "react";

export const SkillSlider = ({ children: skills }) => {

  return (
    <div className="skill-slider">
      <div className="flex skill-items">{skills}</div>
    </div>
  );
};
