import React, {useState} from 'react'







const App = () => {

  const defaultMovies = [
    {
      name:"Shrek",
      description: "This is a movie description This is a movie description This is a movie description",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/zUKYjBNBr2JecOC71tHZ9C83ojb.jpg"
  },
  {
      name:"Shrek 2",
      description: "This is a movie description This is a movie description This is a movie description",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/pt5wt6L5c6zm9aolVNeaWomrpm3.jpg"
  },
  {
      name:"One Piece Film Red",
      description: "This is a movie description This is a movie description This is a movie description",
      poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4ovEtMHpv1UKDJB6Wq69DB4q8xG.jpg"
  },
  {
    name:"Super Mario Bros The Movie",
    description: "This is a movie description This is a movie description This is a movie description",
    poster: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7k4fOuxA4vhblSSa5cTDRLlR7jU.jpg"
  }

  
  ];

  const [movies, setMovies] = useState(defaultMovies);

  const [searchValue, setSearchValue] = useState("");

  let searchedMedia = [];

  const onSearchValueChange = (e) => {
    setSearchValue(e.target.value);
    console.log(e.target.value);
  }


  if(!searchValue >= 1){
    searchedMedia = movies;
  } else {
    searchedMedia = movies.filter( movie => {
      const movieName = movie.name.toLowerCase()
      const searchText = searchValue.toLowerCase()

      return movieName.includes(searchText)

    })
  }

  return (
    <div className='App'>

      <h1>Movie App</h1>


      <input 
      type="text"
      placeholder='Search...'
      value={searchValue}
      onChange={onSearchValueChange}
       />




      {searchedMedia.map( movie => (

        <div className='Movie'>

          <h3>{movie.name}</h3>
          <h2>{movie.description}</h2>
          <img width="100px" src={movie.poster} alt="movie poster" />

          
        </div>
      ))}



    </div>
  )
}

export default App