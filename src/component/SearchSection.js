import React, { useContext, useEffect } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import ResultCard from "./ResultCard";

export default function SearchSection() {
  const { searchResult, searchWord } = useContext(MovieContext);
  


  return searchResult.length ? (
    <div className="displayBox">
      <p className="text">{'Result for: "' + searchWord + '"'}</p>
      {searchResult
        .sort((a, b) => b.Year - a.Year)
        .map((result,index) => {
          return <ResultCard key={index} info={result} />;
        })}
    </div>
  ) : (
    <div></div>
  );
}
