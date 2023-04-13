import React from 'react'
import useData from '../../hooks/useData'

import "./Movie.scss"

const Movie = ({movie,}) => {

   const {openModal,
    setOpenModal, modalToggle} = useData();

  return (
    
    <div className='Movie' onClick={()=>modalToggle()}>

    {/* <h1>{movie.name}</h1>
    <h2>{movie.description}</h2> */}
    <img src={movie.poster} alt="movie poster" />

    
  </div>

  )
}

export default Movie