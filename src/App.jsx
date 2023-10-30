import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import SearchIcon from "./search.svg"


const API_URL="http://www.omdbapi.com?apikey=9b9d5957";

function App() {
 //9b9d5957 API Key
 const searchMovies=async (title)=>{
  const response =await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();

  console.log(data.Search);}

 useEffect(()=>{
 searchMovies('Spiderman');
  },[]);

  return (
    <div className="app">
     <h1>Movie Hub</h1>
     <div className='search'>
      <input placeholder='Search the movies' value={""}  onChange={()=>{}}/>
      <img src={SearchIcon} alt='search' onClick={()=>{}}/>
     </div>
      <div className='container'>

      </div>
    </div>
  );
}

export default App
