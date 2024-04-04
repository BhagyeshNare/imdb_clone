import React from 'react';


function WatchList( {watchlist , handleRemoveFromWatchlist}) {
 


  

  return (
  <>
   
   <div className='flex flex-wrap justify-center m-4 '>
    <div className='flex justify-center bg-blue-400 h-[3rem] w-[7.5rem] rounded-lg font-bold text-white items-center mx-2'>All genre</div> 
    <div className='flex justify-center bg-blue-400 h-[3rem] w-[7.5rem] rounded-lg font-bold text-white items-center'>Action</div>  
   </div>

   <div className='flex m-4 justify-center'>
        <input type='text' placeholder='Search Movies' className='h-[3rem] w-[20rem] bg-gray-200 outline-none px-2'/>
   </div>

   <div className='m-7 overflow-hidden border border-gray-200'>
    <table className='w-full text-gray-500 text-center'>
      <thead className='border-b-2'>
        <tr>
          <th>Name</th>
          <th>Rating</th>
          <th>Popularity</th>
          
        </tr>
      </thead >
      <tbody>

        {watchlist.map((movieObj) => {
               return <tr className='border-b-2'>
               <td className='flex items-center px-6 py-4'>
                 <img className='h-[6rem] w-[5rem] ' src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}/>
                 <div className='mx-10' >{movieObj.original_title}</div>
               </td>
               <td>{(movieObj.vote_average).toFixed(1)}</td>
               <td>{Math.round (movieObj.popularity)}</td>
               
               <td onClick={() => handleRemoveFromWatchlist(movieObj)}  className='text-red-500 hover:cursor-pointer'>Delete</td>
             </tr>
     
        })}
        

      </tbody>
    </table>
   </div>

  </>
  )
}

export default WatchList