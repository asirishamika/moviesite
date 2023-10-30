import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'


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
    <div className="App">
     <h1>My APp</h1>
    </div>
  );
}

export default App
