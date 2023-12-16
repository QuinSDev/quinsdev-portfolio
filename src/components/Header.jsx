import React from "react";
import logo from "../assets/images/LogoQS.png"

export const Header = () => {
  return (
    <div className="flex w-full px-8 pt-10 sm:pb-0 sm:pt-6 sm:px-32 justify-center sm:justify-center md:justify-center lg:justify-start xl:justify-start component">
      <img className="w-36 sm:w-44" src={logo} alt="logo" />
    </div>
  );
};
