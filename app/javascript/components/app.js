import React from 'react';
import { useEffect, useState } from 'react';
import PokemonCard from './pokemonCard';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function App() {

const [allPokemons, setAllPokemons] = useState([])
const [loadMore, setLoadMore] = useState('api/v1/pokemons/?limit=20')

const getAllPokemons = async () => {
  const res = await fetch(loadMore)
  const data = await res.json()
  setAllPokemons(data)
  setLoadMore(data.next)
}

useEffect(() => {
  getAllPokemons()
}, [])

console.log(allPokemons)

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
      <button className="load-more" onClick={() => getAllPokemons()}>Load more</button>
    </div>
  </div>
  );
}

export default App;
