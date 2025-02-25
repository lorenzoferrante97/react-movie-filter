// import { useState } from 'react'
// import './App.css'

import { useState, useEffect } from "react";

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  const [ filteredFilms, setFilteredFilms ] = useState(films);
  const [ filteredGenre, setFilteredGenre ] = useState("default");

  const filterGenre = (e) => {
    return setFilteredGenre( e.target.value );
  }

  useEffect ( () => {

    if (filteredGenre.toLowerCase() !== "default") {
      const filterFilms = films.filter( (film) => film.genre.toLowerCase() === filteredGenre.toLowerCase() );
      setFilteredFilms( filterFilms );
    } else { setFilteredFilms( films ); }

  }, [filteredGenre] )

  return (

    <>
      <div className="min-h-screen w-full flex flex-col gap-4u justify-center items-center px-5u">

        {/* select genre */}
        <form className="w-full bg-smoke-50 p-7u">
          <select name="genres" id="genres" onChange={ filterGenre } className="w-full border-b border-smoke-200 pb-2u focus:outline-black">
            <option value="default">Scegli un genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </form>

        {/* lista films */}
        <ul className="flex flex-col gap-7u w-full bg-smoke-50 p-7u">
          {
            filteredFilms.map( (film, i) => {

              return (
                <>
                <li className="flex flex-col gap-2u" key={i}>
                  <span className="bg-smoke-50 border border-smoke-200 px-2u py-u rounded-md w-fit">{film.genre}</span>
                  <p className="font-body-base-bold">{film.title}</p>
                </li>
                </>
              )
            } )
          }
        </ul>
        
      </div>
    </>

  )
}

export default App;

// start code
