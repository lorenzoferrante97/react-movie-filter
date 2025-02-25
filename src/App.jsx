// import { useState } from 'react'
// import './App.css'

import { useState } from "react";

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

  return (

    <>
      <div className="min-h-screen w-full flex flex-col gap-4u justify-center items-center">

        {/* select genre */}
        <form>
          <select name="genres" id="genres" onChange={ filterGenre }>
            <option value="default">Scegli un genere</option>
            <option value="Fantascienza">Fantascienza</option>
            <option value="Thriller">Thriller</option>
            <option value="Romantico">Romantico</option>
            <option value="Azione">Azione</option>
          </select>
        </form>

        {/* lista films */}
        <ul className="flex flex-col gap-7u w-[92%] bg-smoke-50 p-7u">
          {
            films.map( (film, i) => {

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
