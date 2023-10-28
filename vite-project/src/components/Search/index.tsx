import './search.scss';
import { Card, HomeState } from '../../types';

type State = {
  setSearch: (object: HomeState) => void;
  cards: Card[] | [];
};

function Search({ setSearch, cards }: State) {
  let search = '';
  return (
    <div className="search__block">
      <input
        onChange={(event) => {
          search = event.target.value;
        }}
        className="input search__input"
        placeholder="Input text"
      />
      <button
        onClick={() => {
          try {
            setSearch({ search, cards, needUpdate: true });
          } catch (error) {
            if (error instanceof Error)
              // eslint-disable-next-line no-console
              console.log(`${error.name}: ${error.message}`);
          }
        }}
        type="button"
        className="button search__button"
      >
        Search
      </button>
      <button
        onClick={() => {
          try {
            throw new Error('This is a Test Error');
          } catch (error) {
            if (error instanceof Error)
              // eslint-disable-next-line no-console
              console.log(`${error.name}: ${error.message}`);
          }
        }}
        type="button"
        className="button error__button"
      >
        Throw Error
      </button>
    </div>
  );
}

export default Search;
