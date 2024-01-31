import React from "react";
import Perfil from "../assets/images/Perfil.png"

export const AboutMe = () => {
  const secondColor = {
    color: "var(--second-color)",
  };

  return (
    <div className="flex lg:flex-row flex-col w-full xl:px-32 lg:pt-20 lg:px-20 md:px-20 md:pt-12 sm:px-16 sm:pt-12 px-14 pt-14 xl:justify-between lg:justify-between component">
      <div className="grid flex-grow card rounded-box xl:max-w-2xl lg:max-w-md justify-items-start">
        <div >
          <h2 className="lg:text-5xl md:text-5xl sm:text-4xl text-3xl font-bold text-white">
            Sobre <span className="" style={secondColor}>Mí</span>
          </h2>
          <div className="lg:mt-10 md:mt-6 sm:mt-2">
          <h3 className="md:text-3xl sm:text-2xl text-xl text-white">Desarrollador FullStack</h3>
          <p className="mt-4 md:text-xl sm:text-lg text-base text-white">
          Me encanta la tecnología y tengo amor por el aprendizaje constante. 
          Mi curiosidad me llevó al mundo del desarrollo de software, donde he podido 
          colocar mi creatividad y mi amor por la resolución de problemas. A través de proyectos 
          personales y cursos de formación, he adquirido conocimiento de diversas 
          tecnologías y lenguajes de programación. Creo firmemente en el poder de la 
          tecnología para mejorar nuestras vidas y estoy emocionado de ser parte de ese viaje.
          </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-24 md:mt-6 sm:mt-6 mt-6 xl:w-80 lg:w-72 md:w-60 sm:w-60 w-60">
        <img className="rounded-badge" src={Perfil} alt="" />
      </div>
    </div>
  );
};
