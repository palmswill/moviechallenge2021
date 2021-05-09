import React, { useContext } from "react";
import { MovieContext } from "../context/MovieContextProvider";
import ResultCard from "./ResultCard";

export default function SearchSection() {
  const { searchResult, searchWord,errorMessage } = useContext(MovieContext);
  


  return searchResult.length ? (
    <div>
      {errorMessage?(<p className="text">{errorMessage}</p>):(<p className="text">{'Search Result : "' + searchWord + '"'}</p>)}

    <div className="displayBox">
      {searchResult
        .sort((a, b) => b.Year - a.Year)
        .map((result,index) => {
          return <ResultCard key={index} info={result} />;
        })}
    </div>
    </div>
  ) : (
    <div>
      {errorMessage?(<p className="text">{errorMessage}</p>):(<div></div>)}
    </div>
  );
}
