import React from "react";
import MovieCard from "./MovieCard";
import { useEffect } from "react";
import axios from 'axios'
import { useState } from 'react'
import Pagination from "./Pagination";

function Movies( {handleAddToWatchlist , handleRemoveFromWatchlist , watchlist}) {


    const [movies , setMovies] = useState([])
    const [pageNo , setPageNo] = useState(1)

    const handlePrev = ()=>{
      if(pageNo === 1){
        setPageNo(1)
      } else{
        setPageNo(pageNo-1)
      } 
    }

    const handleNext = ()=>{
        setPageNo(pageNo+1)
    }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=7841372a23cf3b7e2ee1cf9f53ce3e3f&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results)
      });
  }, [pageNo] );

  return (
    <div className="p-5">
      <div className="text-2xl m-5 font-bold text-center">Trending Movies</div>

      <div className="flex flex-row flex-wrap justify-around gap-3">
        
        {movies.map((movieObj) =>{
           return(<MovieCard key={movieObj.id} movieObj={movieObj} poster_path={movieObj.poster_path} original_title={movieObj.original_title} watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>)
        })}
        
      </div>

      <Pagination handlePrev={handlePrev} handleNext={handleNext} pageNo={pageNo} />
    </div>
  );
}

export default Movies;
