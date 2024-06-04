import React, { useState } from "react";
import Header from "./components/Header";
import useFetch from "./hooks/useFetch";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import { Route, Routes } from "react-router-dom";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const App = () => {
  const { data, loading, error } = useFetch(
    "https://restcountries.com/v3.1/all"
  );
  const { darkMode } = useTheme();
  return (
    <div
      className={`${
        darkMode ? "bg-body_dark" : "bg-body_grey"
      } w-screen min-h-screen h-full text-light_mode_text font-nunito`}
    >
      <Header />
      <Routes>
        <Route
          path="/"
          element={<HomePage data={data} loading={loading} error={error} />}
        />
        <Route path="/country/:cca3" element={<DetailsPage data={data} />} />
      </Routes>
    </div>
  );
};

export default App;
