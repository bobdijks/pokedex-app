import React from 'react';
import MyImage from 'images/small-ball.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsAltV } from '@fortawesome/free-solid-svg-icons'
import { faWeightHanging } from '@fortawesome/free-solid-svg-icons'

const PokemonCardBack = ({ ability, height, weight, moves }) => {

  const arrows = <FontAwesomeIcon icon={faArrowsAltV} />
  const kilos = <FontAwesomeIcon icon={faWeightHanging} />

  const style = `card-container back`
  return (
    <div className={style}>
     <div className="detail-wrapper">
        <p className="back-p">{arrows} {height / 10} M</p>
        <p className="back-p">{kilos} {weight / 10 } KG</p>
        <p className="back-p">Ability:</p>
        <p className="back-p">{ability}</p>
        <p className="back-p">Move:</p>
        <p className="back-p">{moves}</p>
        </div>
      <img className="back" src={MyImage} alt={'pokeball'} />
    </div>
  )
}

export default PokemonCardBack;
