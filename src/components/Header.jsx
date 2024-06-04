import React, { useState } from "react";
import { IoMoonOutline } from "react-icons/io5";
import "../style/header.css";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const { darkMode, setDarkMode } = useTheme();
  return (
    <nav className={`header ${darkMode ? "dark" : "light"}`}>
      <Link to={"/"}>
        <div className="title">Where in the world?</div>
      </Link>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="button"
        aria-label="Toggle Dark Mode"
      >
        <IoMoonOutline />
        <span>Dark Mode</span>
      </button>
    </nav>
  );
};

export default Header;
