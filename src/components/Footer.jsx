import React from "react";

export const Footer = () => {
  const secondColor = {
    color: "var(--second-color)",
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer footer-center h-full">
      <aside>
        <p className="text-lg text-white">
          Copyright <span style={secondColor}>©</span> {currentYear} - All
          right reserved <span style={secondColor}>by</span> QuinSDev
        </p>
      </aside>
    </footer>
  );
};
