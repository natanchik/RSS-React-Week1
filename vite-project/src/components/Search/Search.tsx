import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import type { RootState } from '../../utils/redux/store';
import { setSearch } from '../../utils/redux/reducers/searchReducer';
import {
  setPage,
  setNeedLoading,
} from '../../utils/redux/reducers/cardsReducer';

import './search.scss';

function Search() {
  const search = useSelector((state: RootState) => state.search.value);
  const dispatch = useDispatch();

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
          dispatch(setSearch(input));
          dispatch(setPage(1));
          dispatch(setNeedLoading(true));
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
