import React from 'react'
import useData from '../../hooks/useData'

const SearchBar = ({searchValue, onSearchValueChange}) => {



  //Using this way to get the props doesnt work for some reason, the movie list does not update
  //const {searchValue, onSearchValueChange} = useData();


  return (


    <div className='SearchBar'>
         <input 
      type="text"
      placeholder='Search...'
      value={searchValue}
      onChange={onSearchValueChange}
       />

    </div>


  )
}

export default SearchBar