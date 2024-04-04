import "./App.css";
import Navbar from "./components/Navbar";
import WatchList from "./components/WatchList";
import Movies from "./components/Movies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import { useState } from "react";
import { useEffect } from "react";


function App() {

  let [watchlist , setWatchlist] = useState ([])

   let handleAddToWatchlist = (movieObj) =>{
    let newWatchlist = [...watchlist , movieObj]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchlist))
    setWatchlist(newWatchlist)
    console.log(newWatchlist) 
  }

  
  let handleRemoveFromWatchlist = (movieObj)=>{
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id != movieObj.id
    })

    setWatchlist(filteredWatchlist)
    console.log(filteredWatchlist)
  }


  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return
    }
    setWatchlist(JSON.parse(moviesFromLocalStorage))
  } , [])


  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner /> <Movies watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<WatchList  watchlist={watchlist} handleAddToWatchlist={handleAddToWatchlist} handleRemoveFromWatchlist={handleRemoveFromWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
