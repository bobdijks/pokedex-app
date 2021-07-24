import React from 'react';
import { useEffect, useState } from 'react';
import PokemonCardFront from './pokemonCardFront';
import PokemonCardBack from './pokemonCardBack';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function App() {

const [counter, setCounter] = useState(1)
const counterMore = () => {
  if (counter < 5)
  setCounter(counter + 1)
}

const counterLess = () => {
  setCounter(counter - 1)
}

const [allPokemons, setAllPokemons] = useState([`api/v1/pokemons/?page=1`])
const [loadMore, setLoadMore] = useState(`api/v1/pokemons/?page=${counter}`)

const getAllPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()
  setAllPokemons(data)
  setLoadMore(`api/v1/pokemons/?page=${counter}`)
}

useEffect(() => {
  getAllPokemons()
}, []);

const ref = useRef();

return (
  <div className="app-container">
    <h1>WELCOME TO POKÉDEX</h1>
    <div className="index-container">
      <div className="pokemon-container">
        {allPokemons.map((pokemon, index) =>
          <Flippy
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
            ref={ref}
          >
            <FrontSide>
              <PokemonCardFront
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.photo_url}
                type={pokemon.pokemon_type}
                ability={pokemon.ability}
                height={pokemon.height}
                weight={pokemon.weight}
                key={index}
              />
            </FrontSide>
            <BackSide>
              <PokemonCardBack
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.photo_url}
                type={pokemon.pokemon_type}
                ability={pokemon.ability}
                height={pokemon.height}
                weight={pokemon.weight}
                key={index}
              />
            </BackSide>
          </Flippy>
        )}
      </div>
      <div className="controls-container">
        <button className="load-button" onClick={() => {
          counterLess()
          getAllPokemons()
        }}
        >Previous page</button>
        <button className="load-button" onClick={() => {
          counterMore()
          getAllPokemons()
        }}
        >Next page</button>
      </div>
    </div>
  </div>
  )
}

export default App;
