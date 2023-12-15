import React from "react";
import logo from "../assets/images/LogoQS.png"

export const Header = () => {
  return (
    <div className="flex w-full pb-0 pt-6 px-32 xl:justify-start lg:justify-start md:justify-center component">
      <img className="xl:w-44 lg:w-40 md:w-36" src={logo} alt="logo" />
    </div>
  );
};
