import React from 'react';
import { useEffect, useState } from 'react';
import PokemonCard from './pokemonCard';

function App() {

const [counter, setCounter] = useState(1)
const counterMore = () => {
  if (counter < 5)
  setCounter(counter + 1)
}

const counterLess = () => {
  setCounter(counter - 1)
}

const [allPokemons, setAllPokemons] = useState([])
const [loadMore, setLoadMore] = useState(`api/v1/pokemons/?page=${counter}`)

const getAllPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()
  setAllPokemons(data)
  setLoadMore(`api/v1/pokemons/?page=${counter}`)
}

useEffect(() => {
  getAllPokemons()
})

return (
  <div className="app-container">
    <h1>WELCOME TO POKÉDEX</h1>
    <div className="index-container">
      <div className="pokemon-container">
          {allPokemons.map((pokemon, index) =>
          <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.photo_url}
          type={pokemon.pokemon_type}
          ability={pokemon.ability}
          height={pokemon.height}
          weight={pokemon.weight}
          key={index}
          />
        )}
      </div>
      <div className="controls-container">
        <button className="load-button" onClick={() => {
          getAllPokemons()
          counterLess()
        }}
        >Previous page</button>
        <button className="load-button" onClick={() => {
          getAllPokemons()
          counterMore()
        }}
        >Next page</button>
      </div>
    </div>
  </div>
  );
}

export default App;
