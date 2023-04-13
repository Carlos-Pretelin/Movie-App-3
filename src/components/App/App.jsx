import React, {useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Movie from '../Movie/Movie';
import useData from '../../hooks/useData';

import "./App.scss"
import Slider from '../Slider/Slider';





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


     <Slider searchedMedia={searchedMedia}/>
      



    </div>
  )
}

export default App