import React, { useCallback, useEffect, useMemo, useState } from "react";
import SearchBar from "../components/SearchBar";
import FilterBox from "../components/FilterBox";
import SkeletonElement from "../skeletons/SkeletonElement";
import CountryCard from "../components/CountryCard";

const HomePage = ({ data, loading, error }) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");

  const handleSetSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  const handleSetRegion = useCallback((value) => {
    setRegion(value);
  }, []);

  const filteredData = useMemo(() => {
    if (!data) return [];

    let filtered = data;

    if (region) {
      filtered = filtered.filter((country) => country.region === region);
    }

    if (search) {
      const lowerCaseSearch = search.toLocaleLowerCase();
      const exactMatches = filtered.filter((country) =>
        country.name.common.toLocaleLowerCase().startsWith(lowerCaseSearch)
      );
      const similarMatches = filtered.filter(
        (country) =>
          !country.name.common
            .toLocaleLowerCase()
            .startsWith(lowerCaseSearch) &&
          country.name.common.toLocaleLowerCase().includes(lowerCaseSearch)
      );

      return [...exactMatches, ...similarMatches];
    }

    return filtered;
  }, [data, region, search]);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  return (
    <>
      <div className="lg:py-6 lg:flex lg:justify-between lg:px-10">
        <SearchBar setSearch={handleSetSearch} />
        <FilterBox setRegion={handleSetRegion} />
      </div>
      {loading && <SkeletonElement />}
      <div className="2md:grid 2md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-y-8 xl:mx-2">
        {!loading &&
          filteredData.map((country) => (
            <CountryCard key={country.cca3} country={country} />
          ))}
      </div>
    </>
  );
};

export default HomePage;
