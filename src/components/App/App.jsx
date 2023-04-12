import React, {useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Movie from '../Movie/Movie';
import useData from '../../hooks/useData';

import "./App.scss"





const App = () => {

  

  const {
    movies,
    setMovies,
    searchValue,
    setSearchValue,
    searchedMedia,
    onSearchValueChange,


  } = useData();

  

  return (
    <div className='App'>

      <h1>Movie App</h1>


     <SearchBar
      searchValue={searchValue} 
      onSearchValueChange={onSearchValueChange}
     />



      {searchedMedia.map( movie => (

       <Movie movie={movie} key={movie.name}/>

      ))}



    </div>
  )
}

export default App