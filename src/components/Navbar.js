import React from "react";
import logo from "../asset/mylogo.png";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img src={logo} className="logo" />
      </div>
    </div>
  );
}
