import React, { useCallback, useEffect, useRef, useState } from "react";
import { IoMdSearch } from "react-icons/io";
import "../style/searchBar.css";
import { useTheme } from "../context/ThemeContext";

const debounce = (func, delay) => {
  let timeoutId;

  const debouncedFunction = (...args) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };

  debouncedFunction.cancel = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
  };

  return debouncedFunction;
};

const SearchBar = ({ setSearch }) => {
  const [keyword, setKeyword] = useState("");
  const { darkMode } = useTheme();
  const debouncedSetSearch = useRef(
    debounce((value) => setSearch(value), 300)
  ).current;

  useEffect(() => {
    debouncedSetSearch(keyword);
    return () => {
      debouncedSetSearch.cancel();
    };
  }, [keyword, debouncedSetSearch]);

  const handleInputChange = (e) => {
    setKeyword(e.target.value.toLocaleLowerCase());
  };

  return (
    <div className={`search-bar ${darkMode ? "dark" : "light"}`} role="search">
      <div className="icon">
        <IoMdSearch />
      </div>
      <input
        className={`input ${darkMode ? "dark" : "light"}`}
        value={keyword}
        onChange={handleInputChange}
        type="text"
        placeholder="Search for a country..."
        aria-label="Search for a country"
      />
    </div>
  );
};

export default SearchBar;
