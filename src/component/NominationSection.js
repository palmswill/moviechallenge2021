import React,{useContext} from 'react'
import { MovieContext } from '../context/MovieContextProvider'
import NominationCard from './NominationCard';


export default function NominationSection() {

    const {nomination}=useContext(MovieContext)

    const handleIconClick=()=>{
        document.getElementById("searchBar").select();
    }

    return nomination?(
        <div className='nominationSection'>
            {nomination
        .map((imdbID,index) => {
          return <NominationCard key={index} imdbID={imdbID} />;
        })}
        {
         [...Array(5-nomination.length)].map((value,index) => {
            return <div className="nomicard empty" key={index+5}><div className="icon" key={index}><i className="fas fa-plus-circle fa-2x" onClick={handleIconClick}></i></div></div>
          })

        }
        

        </div>
    ):(
        <div className='nominationSection'>
            
        </div>
    )
}
