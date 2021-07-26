import React from 'react';
import { useEffect, useState } from 'react';
import PokemonCardFront from './pokemonCardFront';
import PokemonCardBack from './pokemonCardBack';
import { useRef } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

function App() {

const [counter, setCounter] = useState(1)
  const [allPokemons, setAllPokemons] = useState([]);

const getAllPokemons = async () => {
  if (counter < 5)
  setCounter(counter + 1 )
  const res = await fetch(`api/v1/pokemons/?page=${counter}`)
  const data = await res.json()
  setAllPokemons(data)
}

const jumpBack = async () => {
  const res = await fetch('api/v1/pokemons/?page=1')
  const data = await res.json()
  setAllPokemons(data)
  setCounter(2)
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
            flipOnHover={true}
            flipOnClick={false}
            flipDirection="horizontal"
            ref={ref}
            key={index}
          >
            <FrontSide>
              <PokemonCardFront
                id={pokemon.id}
                name={pokemon.name}
                image={pokemon.photo_url}
                type={pokemon.pokemon_type}
                key={index}
              />
            </FrontSide>
            <BackSide>
              <PokemonCardBack
                ability={pokemon.ability}
                height={pokemon.height}
                weight={pokemon.weight}
                moves={pokemon.moves}
                key={index}
              />
            </BackSide>
          </Flippy>
        )}
      </div>
      <div className="controls-container">
        <button className="load-button" onClick={() => {
          jumpBack()
        }}
        >Back to start</button>
        <button className="load-button" onClick={() => {
          getAllPokemons()
        }}
        >More Pokémon</button>
      </div>
    </div>
  </div>
  )
}

export default App;
