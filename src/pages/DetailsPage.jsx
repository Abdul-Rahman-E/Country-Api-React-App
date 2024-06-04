import React from "react";
import { useParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";
import Button from "../components/Button";
import Flag from "../components/Flag";
import CountryInfo from "../components/CountryInfo";
import { useTheme } from "../context/ThemeContext";

const DetailsPage = ({ data }) => {
  const { cca3 } = useParams();
  const country = data?.find((country) => country.cca3 === cca3);
  const { darkMode } = useTheme();

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div
      className={`text-detail_text  ${
        darkMode ? "bg-body_dark" : "bg-body_grey"
      } `}
    >
      <Button shape={<MdKeyboardBackspace />} name={"Back"} />
      <div className="flex flex-col 2md:flex-row 2md:justify-around 2md:mx-8">
        <Flag address={country.flags.svg} />
        <CountryInfo country={country} allCountries={data} />
      </div>
    </div>
  );
};

export default DetailsPage;
