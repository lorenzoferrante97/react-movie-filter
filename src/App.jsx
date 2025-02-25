// import { useState } from 'react'
// import './App.css'

const films = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
];

function App() {

  return (

    <>
      <div className="min-h-screen w-full flex flex-col gap-4u justify-center items-center">

        {/* lista films */}
        <ul className="flex flex-col gap-7u">
          {
            films.map( (film) => {

              return (
                <li className="flex flex-col gap-2u" key={film.title}>
                  <span className="bg-smoke-50 border border-smoke-200 px-2u py-u rounded-md w-fit">{film.genre}</span>
                  <p className="font-body-base-bold">{film.title}</p>
                </li>
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
