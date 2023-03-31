import React, { useState } from "react";
import "./Header.css";
import logo from "../../Assets/Images/infinitheism-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const activeLink = useLocation().pathname; //getting the path
  return (
    <div className="Header">
      {/* different links are provided to the nav tabs and added active color to the tabs */}
      <div className="Header_navbars">
        <Link
          to="/home"
          className={
            activeLink === "/home"
              ? " Header_navTab  link active-link"
              : "Header_navTab  link"
          }
        >
          HOME
        </Link>
        <Link
          to="Infiniminute"
          className={
            activeLink === "/Infiniminute"
              ? " Header_navTab  link active-link"
              : "Header_navTab  link"
          }
        >
          INFINIMINUTE
        </Link>
        <Link to="/" className="Header_logo">
          <img src={logo} alt="logo" />
        </Link>
        <Link
          to="InfiniAcademy"
          className={
            activeLink === "/InfiniAcademy"
              ? " Header_navTab  link active-link"
              : "Header_navTab  link"
          }
        >
          INFINIACADEMY
        </Link>
        <Link className="Header_navTab  link">INFINIPATH</Link>
      </div>
      <div>
        <MenuIcon className="header_menu_bar" />
      </div>
    </div>
  );
}
