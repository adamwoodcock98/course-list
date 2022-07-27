import React from "react";
import logo from "./logo.svg";

import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="bar">
      <img src={logo} alt="Hult International Business School logo" />
    </div>
  );
};
