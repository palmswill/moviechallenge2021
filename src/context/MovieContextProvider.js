import React,{useState,createContext,useEffect} from 'react'
import axios from 'axios';

export const MovieContext=createContext();

export default function MovieContextProvider(props) {

    const [searchWord,setSearchWord]=useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [errorMessage,setErrorMessage] = useState("");
    const [nomination,setNomination]=useState([]);
    
    


    useEffect(() => {
        const fetchMovie = async () => {
            await axios.get("https://www.omdbapi.com/?apikey=de8db41f&s=" + searchWord)
                .then(res => {
                    if (res.data.Response === "False") {
                        setErrorMessage(res.data.Error.slice(0, -1) + " for  " + searchWord)
                        setSearchWord("")
                    }
                    else {
                        setSearchResult(res.data.Search)
                        setErrorMessage("")
                        

                    }
                })
        }
        ///intentionally delay search to show loading animation;
        if (searchWord.length>1){
            setSearchResult([]);
            setTimeout(()=>{
                fetchMovie()
            },100)
        }
    }, [searchWord])





    return (
        <MovieContext.Provider value={{ searchResult,setSearchResult,searchWord,setSearchWord,errorMessage,nomination,setNomination}}>
            {props.children}
        </MovieContext.Provider>
    )
}
