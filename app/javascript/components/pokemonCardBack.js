import React from 'react';
import MyImage from 'images/small-ball.png'

const PokemonCardBack = ({ ability, height, weight, moves }) => {

  const style = `card-container back`
  return (
    <div className={style}>
     <div className="detail-wrapper">
        <p className="back-p">Ability:</p>
        <p className="back-p">{ability}</p>
        <p className="back-p">Move:</p>
        <p className="back-p">{moves}</p>
        <p className="back-p">Height: {height}</p>
        <p className="back-p">Weight: {weight}</p>
        </div>
      <img className="back" src={MyImage} alt={'pokeball'} />
    </div>
  )
}

export default PokemonCardBack;
