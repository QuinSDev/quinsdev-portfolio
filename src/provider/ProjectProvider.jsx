import React, { createContext, useState } from "react";

export const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [selectedProject, setSelectedProject] = useState(null);

  const detailSelectedProject = (project) => {
    setSelectedProject(project);
  };

  return (
    <ProjectContext.Provider value={{ selectedProject, detailSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  );
};
