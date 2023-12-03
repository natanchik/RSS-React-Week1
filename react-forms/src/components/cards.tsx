import { useAppSelector } from '../redux/hooks';
import './cards.scss';

export default function Cards() {
  const cards = useAppSelector((state) => state.users.users);
  return (
    <div className="cards">
      {cards &&
        cards.map((card, index) => (
          <div className="card" key={index}>
            {Object.entries(card).map((key, value) => (
              <p key={value}>{`${value + 1}. ${
                key[0][0].toUpperCase() + key[0].slice(1)
              }: ${key[1]}`}</p>
            ))}
          </div>
        ))}
    </div>
  );
}
