import React,{useContext,useEffect,useRef} from 'react'
import { MovieContext } from '../context/MovieContextProvider'

export default function ResultCard({info} ) {
    const {setNomination,nomination}=useContext(MovieContext)
    const nominateRef=useRef(null)

    const handleNomination = ()=>{
        setNomination([...nomination,info.imdbID]);

        

    }

    useEffect(() => {
         if (nomination.length===5){
             nominateRef.current.disabled=true;

         }
         else{
            nominateRef.current.disabled=nomination.filter(id => id === info.imdbID).length;
         }
        
    }, [nomination,info.imdbID])







    return (
        <div className='searchDisplayCard' >
            <img src={info.Poster} alt={info.Title}/>
            <p className='searchText '>{info.Title}</p>
            <p className='text'>{info.Year}</p>
            <button  ref={nominateRef} onClick={handleNomination} className="nomibutton">nomination </button>


            
        </div>
    )
}
