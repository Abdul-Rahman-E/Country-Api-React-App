import React from "react";
import { useTheme } from "../context/ThemeContext";

const Shimmer = () => {
  const { darkMode } = useTheme();
  return (
    <div className="shimmer-wrapper absolute top-0 left-0 w-[100%] h-[100%] animate-flash z-40">
      <div
        className={`shimmer w-[100%] h-[100%] ${
          darkMode
            ? "bg-[rgba(255,255,255,0.05)]"
            : "bg-[rgba(255,255,255,0.3)]"
        }  -skew-x-[20deg] blur-md`}
      ></div>
    </div>
  );
};

export default Shimmer;
