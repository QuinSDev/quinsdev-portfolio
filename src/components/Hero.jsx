import React from "react";
import logoGithub from "../assets/images/icons8-github.svg"
import logoLinkedin from "../assets/images/icons8-linkedin.svg"

export const Hero = () => {

  const secondColor = {
    color: "var(--second-color)",
  }

  return (
    <div className="flex h-[88vh] py-12 sm:py-14 px-14 xl:px-32 lg:px-20 md:px-20 sm:px-16 justify-end component">
      <div className="flex flex-col max-h-full xl:max-w-xl lg:max-w-md lg:justify-start md:justify-center sm:justify-center justify-center">
        <h1 className="xl:text-6xl lg:text-5xl md:text-5xl sm:text-4xl text-3xl lg:text-left text-center font-bold text-white">Sebastian Quintero</h1>
        <h3 className="sm:mt-4 mt-1 lg:text-4xl md:text-3xl sm:text-2xl text-2xl lg:text-left text-center font-bold" style={secondColor}>FullStack Developer</h3>
        <p className="sm:text-xl text-lg lg:text-left text-center sm:mt-8 mt-5 text-white">Como apasionado desarrollador FullStack, traduzco conceptos creativos
          en experiencias digitales excepcionales. Adéntrate en mi portafolio
          para explorar proyectos únicos donde la magia de la tecnología cobra
          vida.</p>
          <div className="gap-4 flex mt-6 pt-4 border-t-2 justify-end">
            <img className="w-9 uppercase cursor-pointer" src={logoGithub} alt="Logo Github" />
            <img className="w-9 uppercase cursor-pointer" src={logoLinkedin} alt="Logo Linkedin" />
          </div>
      </div>
    </div>
  );
};
