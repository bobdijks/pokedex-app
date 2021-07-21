import React from 'react';

const PokemonCard = ({id, name, type, image }) => {

  const style = `card-container ${type}`
  return (
    <div className={style}>
      <div className="number">
        <p>{id}</p>
      </div>
      <img src={image} alt={name} />
      <div className="detail-wrapper">
        <h2>{name}</h2>
        <p>Pokétype: {type}</p>
      </div>
    </div>
  )
}

export default PokemonCard;
