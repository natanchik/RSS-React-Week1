import './search.scss';
import { Card, HomeState } from '../../types';

type State = {
  setSearch: (object: HomeState) => void;
  cards: Card[] | [];
};

function Search({ setSearch, cards }: State) {
  return (
    <div className="search__block">
      <input
        onChange={(event) => {
          setSearch({ search: event.target.value, cards });
        }}
        className="input search__input"
        placeholder="Input text"
      />
      <button type="submit" className="button search__button">
        Search
      </button>
      <button type="button" className="button cards__error-button">
        Throw Error
      </button>
    </div>
  );
}

export default Search;
