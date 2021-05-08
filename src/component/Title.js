import React,{useRef,useContext} from 'react'
import {MovieContext} from '../context/MovieContextProvider'

const Title=()=> {

    const {setSearchWord}=useContext(MovieContext);

    const inputBar =useRef(null);

    const handleSubmit=(e)=>{
        e.preventDefault();
        setSearchWord(inputBar.current.value);
        console.log(inputBar.current.value);
    }






    return (
        <div id="title">
            <p className="title text">The Shoppies</p>
            <form onSubmit={handleSubmit}>
            <input ref={inputBar} type="text" id="searchBar" ></input>
            <button type="submit"><i className="fa fa-search"></i></button>
            </form>
        </div>

    )
}

export default Title
