




import React, {useState} from 'react'

const useData = () => {

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
            },
            {
                name:"Interestelar",
                description: "This is a movie description This is a movie description This is a movie description",
                poster: "https://www.themoviedb.org/t/p/original/nrSaXF39nDfAAeLKksRCyvSzI2a.jpg"
            },
            {
                name:"Pulp Fiction",
                description: "This is a movie description This is a movie description This is a movie description",
                poster: "https://www.themoviedb.org/t/p/original/hNcQAuquJxTxl2fJFs1R42DrWcf.jpg"
            },
            {
                name:"Avatar Way of Water",
                description: "This is a movie description This is a movie description This is a movie description",
                poster: "https://www.themoviedb.org/t/p/original/bqOqQ2Tawum3eHKNrc94P4EeaZB.jpg"
            },
            {
                name:"John Wick 4",
                description: "This is a movie description This is a movie description This is a movie description",
                poster: "https://www.themoviedb.org/t/p/original/mj2Z9HnRSIEk3n7yVPoOY4Uzzfh.jpg"
            },
];    
      
        

  const [movies, setMovies] = useState(defaultMovies);

  const [searchValue, setSearchValue] = useState("");


  const [openModal, setOpenModal] = useState(false);

  const modalToggle = ()=> {
    setOpenModal(!openModal)
    console.log(openModal)
  }



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
  return {
    movies,
    setMovies,
    searchValue,
    setSearchValue,
    searchedMedia,
    onSearchValueChange,
    openModal,
    setOpenModal,
    modalToggle



  }
}

export default useData