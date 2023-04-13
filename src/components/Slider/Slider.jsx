import React from 'react'
import useData from '../../hooks/useData'
import Movie from '../Movie/Movie'


import "./Slider.scss"

const Slider = ({searchedMedia}) => {

    //const {searchedMedia} = useData()
  return (
    <div className='Slider'>


        {searchedMedia.map( movie => (

        <Movie movie={movie} key={movie.name}/>


        ))}


    </div>
  )
}

export default Slider