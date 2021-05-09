import React, { useState, createContext, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

export const MovieContext = createContext();

export default function MovieContextProvider(props) {
  const { id } = useParams();

  const [searchWord, setSearchWord] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [nomination, setNomination] = useState(
    id ? id.split("&&") : JSON.parse(localStorage.getItem("nomination")) || []
  );
  
  

  const removeNomination = (imdbId) => {
    setNomination(nomination.filter((id) => id !== imdbId));
  };

  useEffect(() => {
    setSearchResult([]);
    const fetchMovie = async () => {
      await axios
        .get("https://www.omdbapi.com/?apikey=de8db41f&s=" + searchWord)
        .then((res) => {
          if (res.data.Response === "False") {
            setErrorMessage(res.data.Error);
            setSearchWord("");
          } else {
            setSearchResult(res.data.Search);
            setErrorMessage("");
          }
        });
    };
    if (searchWord.length >= 1) {
      fetchMovie();
    }
  }, [searchWord]);

  useEffect(() => {
    localStorage.setItem("nomination", JSON.stringify(nomination));
    if (nomination.length === 5) {
      document.documentElement.scrollTo({ top: 0, behavior: "smooth" });
      setSearchResult([]);
    }
  }, [nomination]);

  return (
    <MovieContext.Provider
      value={{
        searchResult,
        setSearchResult,
        searchWord,
        setSearchWord,
        errorMessage,
        nomination,
        setNomination,
        removeNomination,
      }}
    >
      {props.children}
    </MovieContext.Provider>
  );
}
