import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const Button = ({ shape, name }) => {
  const { darkMode } = useTheme();
  return (
    <div className="px-2 pt-7 pb-9 mx-auto 2md:mx-8 lg:mx-12">
      <Link
        className={`w-24 px-1 py-1 flex items-center justify-center space-x-2 text-home_text shadow-dark rounded-sm font-light mx-5 ${
          darkMode ? "text-head_white bg-head_dark" : "bg-head_white"
        }`}
        to={"/"}
      >
        <span className="font-bold text-lg">{shape}</span>
        <span>{name}</span>
      </Link>
    </div>
  );
};

export default Button;
