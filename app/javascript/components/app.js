import React from 'react';
import { useEffect, useState } from 'react';
import PokemonCard from './pokemonCard';

function App() {

const [allPokemons, setAllPokemons] = useState([])
const [loadMore, setLoadMore] = useState('api/v1/pokemons/?_limit=20')

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
    <h1>Welcome to Pokédex</h1>
    <div className="index-container">
      <div className="pokemon-container">
          {allPokemons.map((pokemon, index) =>
          <PokemonCard
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.photo}
          type={pokemon.pokemon_type}
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
