import React, {useState} from 'react'
import SearchBar from "../SearchBar/SearchBar"
import Modal from '../Modal/Modal';


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
    openModal,
    setOpenModal,
    modalToggle
  } = useData();

 

  

  return (
    <div className='App'>

      <h1>Movie App</h1>

      
     <SearchBar
      searchValue={searchValue} 
      onSearchValueChange={onSearchValueChange}
     />


     <Slider 
     searchedMedia={searchedMedia} 
    //  toggle={modalToggle}
     />

    {openModal ? 
    <Modal
     openModal={openModal}
     setOpenModal={setOpenModal}
     />
     : null
    }
      



    </div>
  )
}

export default App