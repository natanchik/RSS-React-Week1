import { useContext, useState } from 'react';
import { SearchContext } from '../../utils/Context';
import './search.scss';

function Search({
  setPage,
  setNeedLoading,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  setNeedLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const { search, setSearch } = useContext(SearchContext);
  const [input, setInput] = useState(search);
  return (
    <div className="search__block">
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
        value={input}
        className="input search__input"
        placeholder="Input text"
      />
      <button
        onClick={() => {
          setSearch(input);
          setPage(1);
          setNeedLoading(true);
          localStorage.setItem('search', input);
        }}
        type="button"
        className="button search__button"
      >
        Search
      </button>
    </div>
  );
}

export default Search;
