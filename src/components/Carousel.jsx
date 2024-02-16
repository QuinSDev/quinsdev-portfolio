import React,{ useContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { ProjectContext } from "../provider/ProjectProvider";

export const Carousel = ({ projects, setOpenModal }) => {
  const { detailSelectedProject } = useContext(ProjectContext)

  const handleDetailsSelectedProject = (project) => {
    detailSelectedProject(project);
  }

  const maxLength = 150; // Define la longitud máxima de la descripción que quieres mostrar

  const truncateDescription = (text) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Corta la descripción en maxLength y añade tres puntos suspensivos
    }
    return text;
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 gap-14 justify-items-center sm:justify-between sm:items-center component">
      {projects.map((project, index) => (
        <Card key={project.id} className='w-80 h-96 duration-700 group hover:scale-105 z-10 '>
          <CardHeader color="blue-gray" className="h-40 sm:h-56 group-hover:scale-105 duration-1000">
            <img src={project.photo} alt="card-image" className="w-full h-full" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className=" text-xl">
              {project.tittle}
            </Typography>
            <Typography className="text-base h-auto">{truncateDescription(project.description)}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className=" bg-[#ffd800] text-black hover:shadow-gray-400" onClick={() => { setOpenModal(true); handleDetailsSelectedProject(project); }}>
              Ver más
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
