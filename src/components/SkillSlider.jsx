import React from "react";

export const SkillSlider = ({ children: skills }) => {
  return (
    <div className="skill-slider">
      <div className="flex skill-items">
        {React.Children.map(skills, (child, index) => {
          // Si el hijo es un elemento React válido, clonamos y aseguramos una key única
          if (React.isValidElement(child)) {
            return React.cloneElement(child, {
              key: child.key ? `${child.key}-${index}` : index,
            });
          }
          return child;
        })}
      </div>
    </div>
  );
};
