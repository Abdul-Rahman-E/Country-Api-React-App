import React, { memo } from "react";
import "../style/countryCard.css";
import { formatPopulation } from "../functions/commonFunctions.js";
import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext.jsx";

const CountryCard = memo(({ country }) => {
  const {
    flags: { png: flagSrc },
    name: { common: countryName },
    population,
    region,
    capital,
    cca3,
  } = country;

  const { darkMode } = useTheme();

  return (
    <Link to={`/country/${cca3}`}>
      <div className={`${darkMode ? "card-dark" : "card-light"}`}>
        <div>
          <img
            className="card-image"
            src={flagSrc}
            alt={`${countryName} flag`}
          />
        </div>
        <div className="card-content">
          <div className="card-title">{countryName}</div>
          <div className="flex flex-col space-y-1">
            <div className="card-info">
              <span className="card-label">Population:</span>{" "}
              {formatPopulation(population)}
            </div>
            <div className="card-info">
              <span className="card-label">Region:</span> {region}
            </div>
            <div className="card-info">
              <span className="card-label">Capital:</span> {capital}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
});

export default CountryCard;
