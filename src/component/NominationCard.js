import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MovieContext } from "../context/MovieContextProvider";

export default function NominationCard({ imdbID }) {
  const { nomination,removeNomination } = useContext(MovieContext);

  const [ info, setInfo ] = useState();

  useEffect(() => {
    const fetchMovie = async () => {
      await axios
        .get("https://www.omdbapi.com/?apikey=de8db41f&i=" + imdbID)
        .then((res) => {
          setInfo({poster:res.data.Poster,title:res.data.Title,Ratings:res.data.Ratings[1]?(res.data.Ratings[1].Value):("N/A")});
        });
    };

    fetchMovie()
  }, [imdbID, setInfo]);


  return info?(
    nomination.length===5?(
    <div className ="nomifull">
      <img wait={3000} src={info.poster} alt={info.title}/>
      <p className="text">{info.title}</p>
      <p>Rating: {info.Ratings}</p>
      <button onClick={()=>removeNomination(imdbID)}>remove</button>
    </div>
    ):(<div className ="nomicard">
      <p className="text">{info.title}</p>
      <p>Rating: {info.Ratings}</p>
      <button onClick={()=>removeNomination(imdbID)}>remove</button>

    </div>

    )

    

  ):(
    <div>

    </div>
  )
}
