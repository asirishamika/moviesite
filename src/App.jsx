import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import "./App.css"
import SearchIcon from "./search.svg"
import MovieCard from './MovieCard'


const API_URL="http://www.omdbapi.com?apikey=9b9d5957";


const movie1={
  "Title": "The Amazing Spiderman 2 Webb Cut",
  "Year": "2021",
  "imdbID": "tt18351128",
  "Type": "movie",
  "Poster": "https://m.media-amazon.com/images/M/MV5BYzYzZDViNWYtNWViMS00NDMxLThlN2YtZjFkOWMwODkzNzhiXkEyXkFqcGdeQXVyMTUwMzM4NzU0._V1_SX300.jpg"
}

function App() {
 //9b9d5957 API Key

 const [movieList,setMovieList]=useState([]);
 const [searchTerm,setSearchTerm]=useState("");
 const searchMovies=async (title)=>{
  const response =await fetch(`${API_URL}&s=${title}`);
  const data=await response.json();

  setMovieList(data.Search);}

 useEffect(()=>{
 searchMovies('Spiderman');
  },[]);

  return (
    <div className="app">
     <h1>Movie Hub</h1>
     <div className='search'>
      <input placeholder='Search the movies' value={searchTerm}  onChange={(e)=>{setSearchTerm(e.target.value)}}/>
      <img src={SearchIcon} alt='search' onClick={()=>{searchMovies(searchTerm)}}/>
     </div>

     {movieList?.length>0?(
      <div className='container'>
        {movieList.map((item)=> <MovieCard movie={item}/>)}
         
      </div>):
      (<div className='empty'>
        <h2>No Movies Found</h2>
      </div>)}
    </div>
  );
}

export default App
