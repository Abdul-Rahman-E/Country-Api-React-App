import React, { useRef, useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CSSTransition } from "react-transition-group";
import "../style/filterBox.css";
import { useTheme } from "../context/ThemeContext";

const FilterBox = ({ setRegion }) => {
  const [selectVisible, setSelectVisible] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState("");
  const nodeRef = useRef(null);
  const { darkMode } = useTheme();

  const handleRegionChange = (region) => {
    setSelectedRegion(region);
    setRegion(region);
    setSelectVisible(false);
  };

  return (
    <div className="filter-box-container">
      <div
        className={`filter-box-header ${
          darkMode ? "bg-head_dark text-head_white" : "bg-head_white"
        }`}
        onClick={() => {
          setSelectVisible(!selectVisible);
        }}
      >
        <div>{selectedRegion || "Filter by Region"}</div>
        <div>
          <RiArrowDropDownLine />
        </div>
      </div>
      <CSSTransition
        in={selectVisible}
        timeout={300}
        classNames="menu"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div ref={nodeRef} className="filter-box-menu">
          {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
            <div
              key={region}
              className={`filter-box-menu-item ${
                darkMode ? "bg-head_dark text-head_white" : "bg-head_white"
              }`}
              onClick={() => {
                handleRegionChange(region);
              }}
            >
              {region}
            </div>
          ))}
        </div>
      </CSSTransition>
    </div>
  );
};

export default FilterBox;
