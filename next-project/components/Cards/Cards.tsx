import Link from 'next/link';
import { Card } from '@/types';
import styles from '../Cards/cards.module.scss';

export default function Cards({ cards }: { cards: Card[] | [] }) {
  return (
    <div className={styles.cards__block}>
      {cards &&
        cards.map((card: Card) => (
          <li className={styles.card} key={card.name}>
            <Link href={`/vehicles/${card.url.split('/').at(-2)}`} style={{ textDecoration: 'none' }}>
              <div className={styles.card__block}>
                <h4>{card.name}</h4>
                <p>Model: {card.model}</p>
                <p>Price: {card.cost_in_credits}</p>
                <p>Crew: {card.crew}</p>
                <p>Length: {card.length}</p>
              </div>
            </Link>
          </li>
        ))}
    </div>
  );
}
