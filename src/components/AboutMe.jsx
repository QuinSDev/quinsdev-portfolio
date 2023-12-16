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
            About <span className="" style={secondColor}>Me</span>
          </h2>
          <div className="lg:mt-10 md:mt-6 sm:mt-2">
          <h3 className="md:text-3xl sm:text-2xl text-xl text-white">FullStack Developer</h3>
          <p className="mt-4 md:text-xl sm:text-lg text-base text-white">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero
            explicabo mollitia labore sunt eaque iste ipsum, rem quae doloremque
            quod, architecto cum rerum laboriosam consequatur velit laborum at
            officiis sed.
          </p>
          </div>
        </div>
      </div>
      <div className="lg:mt-24 md:mt-6 sm:mt-6 mt-6 xl:w-80 lg:w-72 md:w-60 sm:w-60 w-60">
        <img  src={Perfil} alt="" />
      </div>
    </div>
  );
};
