import React from "react";
import { Link } from "react-router-dom";
import { formatPopulation } from "../functions/commonFunctions";
import { useTheme } from "../context/ThemeContext";
import "../style/countryInfo.css";

const CountryInfo = ({ country, allCountries }) => {
  const {
    name: { nativeName },
    population,
    region,
    subregion,
    capital,
    tld,
    currencies,
    languages,
    borders,
  } = country;

  const currencyName = Object.values(currencies)[0].name;
  const languageList = Object.values(languages).join(", ");
  const { darkMode } = useTheme();

  const borderCountryNames = borders?.map((borderCode) => {
    const borderCountry = allCountries.find((c) => c.cca3 === borderCode);
    return borderCountry
      ? { name: borderCountry.name.common, cca3: borderCode }
      : { name: borderCode, cca3: borderCode };
  });

  let nativeCommonName;
  if (nativeName) {
    const firstNativeKey = Object.keys(nativeName)[0];
    nativeCommonName = nativeName[firstNativeKey]?.common;
  }

  return (
    <div className="country-info-container">
      <div className={`country-name ${darkMode ? "dark-mode-text" : ""}`}>
        {country.name.common}
      </div>
      <div className={`country-details ${darkMode ? "dark-mode-text" : ""}`}>
        <div>
          <div className="detail-item">
            <span className="detail-label">Native Name: </span>
            <span className="detail-value">{nativeCommonName}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Population: </span>
            <span className="detail-value">{formatPopulation(population)}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Region: </span>
            <span className="detail-value">{region}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Sub Region: </span>
            <span className="detail-value">{subregion}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Capital: </span>
            <span className="detail-value">{capital}</span>
          </div>
        </div>
        <div>
          <div className="detail-item">
            <span className="detail-label">Top Level Domain: </span>
            <span className="detail-value">{tld}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Currencies: </span>
            <span className="detail-value">{currencyName}</span>
          </div>
          <div className="detail-item">
            <span className="detail-label">Languages: </span>
            <span className="detail-value">{languageList}</span>
          </div>
        </div>
      </div>
      <div className="border-countries">
        <div className={`border-label ${darkMode ? "dark-mode-text" : ""}`}>
          Border Countries:{" "}
        </div>
        <div className="border-list">
          {borderCountryNames && borderCountryNames.length > 0 ? (
            borderCountryNames.map(({ name, cca3 }, index) =>
              index <= 3 ? (
                <Link
                  key={cca3}
                  to={`/country/${cca3}`}
                  className={`border-item ${
                    darkMode ? "dark-border-item" : "light-border-item"
                  }`}
                >
                  {name}
                </Link>
              ) : null
            )
          ) : (
            <div
              className={`border-item ${
                darkMode ? "dark-border-item" : "light-border-item"
              }`}
            >
              No border countries
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
