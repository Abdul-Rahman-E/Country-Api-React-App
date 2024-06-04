import React, { useEffect, useState, useRef } from "react";
import fallbackData from "../assets/data.json";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const didUnmount = useRef(false);

  useEffect(() => {
    didUnmount.current = false;

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (!didUnmount.current) {
          setData(data);
        }
      } catch (error) {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
        if (!didUnmount.current) {
          setError(error.message);
          setData(fallbackData);
        }
      } finally {
        if (!didUnmount.current) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      didUnmount.current = true;
    };
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
