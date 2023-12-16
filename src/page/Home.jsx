import React from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { AboutMe } from "../components/AboutMe";
import bg_Home from "../assets/images/bg-home.png";
import bg_About from "../assets/images/bg-about.png";
import bg_Project from "../assets/images/bg-project.png";
import { Project } from "../components/Project";
import { Skill } from "../components/Skill";
import { Footer } from "../components/Footer";

export const Home = () => {
  const bgHome = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_Home})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bgAbout = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_About})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const bgProject = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${bg_Project})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="stars">
        <div className="star"></div>
        <div className="star1"></div>
        <div className="star2"></div>
        {/* Agrega tantas estrellas como necesites */}
      </div>
      <div className="h-[100vh]" style={bgHome}>
        <Header />
        <Hero />
      </div>
      <div className="h-[100vh] bg-black" >
        <AboutMe />
      </div>
      <div className="h-[100vh]" style={bgProject}>
        <Project />
      </div>
      <div className=":h-[60vh] bg-black">
        <Skill />
      </div>
      <div className="h-[16vh] bg-black">
        <Footer />
      </div>
    </>
  );
};
