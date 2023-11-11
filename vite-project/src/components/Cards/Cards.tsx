import { useContext } from 'react';
import { CardsContext } from '../../utils/Context';
import { Card } from '../../types';
import './cards.scss';

function Cards() {
  const cards = useContext(CardsContext);
  return (
    <div className="cards__block">
      {cards.map((card: Card) => (
        <li className="card" key={card.name}>
          <div className="card__block">
            <h4>{card.name}</h4>
            <div className="card__img" />
            <p className="card__text">Model: {card.model}</p>
            <p className="card__text">Price: {card.cost_in_credits}</p>
            <p className="card__text">Crew: {card.crew}</p>
            <p className="card__text">Length: {card.length}</p>
          </div>
        </li>
      ))}
    </div>
  );
}

export default Cards;
