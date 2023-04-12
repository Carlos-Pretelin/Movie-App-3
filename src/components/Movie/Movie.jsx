import React from 'react'

import "./Movie.scss"

const Movie = ({movie}) => {

   
  return (
    
    <div className='Movie'>

    <h3>{movie.name}</h3>
    <h2>{movie.description}</h2>
    <img src={movie.poster} alt="movie poster" />

    
  </div>

  )
}

export default Movie