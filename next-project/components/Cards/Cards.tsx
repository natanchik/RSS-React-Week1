import { Card } from '@/types';
import styles from './cards.module.scss';

function Cards({ cards }: { cards: Card[] | [] }) {
  return (
    <div className={styles.cards__block}>
      {cards &&
        cards.map((card: Card) => (
          <li className={styles.card} key={card.name}>
            <div className={styles.card__block}>
              <h4>{card.name}</h4>
              <p className={styles.card__text}>Model: {card.model}</p>
              <p className={styles.card__text}>Price: {card.cost_in_credits}</p>
              <p className={styles.card__text}>Crew: {card.crew}</p>
              <p className={styles.card__text}>Length: {card.length}</p>
            </div>
          </li>
        ))}
    </div>
  );
}

export default Cards;
