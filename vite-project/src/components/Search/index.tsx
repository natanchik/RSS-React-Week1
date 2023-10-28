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
          setSearch({ search, cards, needUpdate: true });
        }}
        type="button"
        className="button search__button"
      >
        Search
      </button>
      <button type="button" className="button cards__error-button">
        Throw Error
      </button>
    </div>
  );
}

export default Search;
