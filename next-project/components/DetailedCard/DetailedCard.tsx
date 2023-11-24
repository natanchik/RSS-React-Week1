import { Card } from '@/types';
import styles from './detailedCards.module.scss';

export default function DetailedCard({ card }: { card: Card | {} }) {
  if (!card) {
    return <h3>No infomation about this vehicle</h3>;
  }

  if (Object.keys(card).length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 className={styles.card__header}>Detailed information about vehicle</h1>
      <div className={styles.card__block}>
        {card &&
          Object.entries(card).map((item) => (
            <li className={styles.card__text} key={item[0]}>
              {item[0]}: {item[1]}
            </li>
          ))}
      </div>
    </>
  );
}
