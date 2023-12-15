import React,{ useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

export const Carousel = ({ projects, activeIndex }) => {
  const secondColor = {
    color: "var(--second-color)",
  };

  const maxLength = 150; // Define la longitud máxima de la descripción que quieres mostrar

  const truncateDescription = (text) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "..."; // Corta la descripción en maxLength y añade tres puntos suspensivos
    }
    return text;
  };

  return (
    <div className="relative w-80 flex justify-center items-center component">
      {projects.map((project, index) => (
        <Card
        key={project.id}
        className={`absolute h-96 duration-700 ${
          index === activeIndex ? "scale-105 z-10" : "scale-95 opacity-50"
        }`}
        >
          <CardHeader
            color="blue-gray"
            className="relative h-56 group-hover:scale-105 duration-1000"
          >
            {" "}
            {/* Usa 'group-hover' para escalar el CardHeader */}
            <img src={project.photo} alt="card-image" className="w-full h-full" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className=" text-xl">
              {project.tittle}
            </Typography>
            <Typography className="text-base h-auto">{truncateDescription(project.description)}</Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button className=" bg-[#ffd800] text-black hover:shadow-gray-400">
              Ver más
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
