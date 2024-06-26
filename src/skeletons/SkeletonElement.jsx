import React from "react";
import { useTheme } from "../context/ThemeContext";
import Shimmer from "./Shimmer";

const SkeletonElement = () => {
  const { darkMode } = useTheme();

  return (
    <div
      className={`${
        darkMode ? "bg-slate-700" : "bg-slate-100"
      } w-[17rem] mx-auto mt-10 rounded-md overflow-hidden drop-shadow-md z-30`}
    >
      <div
        className={`w-[17rem] h-[9rem] ${
          darkMode ? "bg-slate-400" : "bg-slate-200"
        }`}
      ></div>
      <div className=" w-full flex flex-col justify-center items-start p-6 pb-16 space-y-2">
        <div className="text-detail_text font-extrabold"></div>
        <div className="flex flex-col space-y-1">
          <div className="w-[5rem] h-[0.7rem] bg-slate-400 rounded-md"></div>
          <div className="w-[12rem] h-[1.2rem] bg-slate-400 rounded-md"></div>
          <div className="w-[8rem] h-[0.9rem] bg-slate-400 rounded-md"></div>
          <div className="w-[10rem] h-[1.5rem] bg-slate-400 rounded-md"></div>
        </div>
      </div>
      <Shimmer />
    </div>
  );
};

export default SkeletonElement;
