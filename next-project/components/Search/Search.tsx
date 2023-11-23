// import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
// import {
//   setPage,
//   setNeedLoading,
//   setSearch
// } from '../../utils/redux/reducers/cardsReducer';

import styles from './search.module.scss';
import sharedStyles from '@/styles/shared.module.scss';

function Search() {
  // const search = useSelector((state: RootState) => state.search.value);
  // const dispatch = useDispatch();

  const [input, setInput] = useState('');
  return (
    <div className={styles.search__block}>
      <input
        onChange={(event) => {
          setInput(event.target.value);
        }}
        value={input}
        className={sharedStyles.input}
        placeholder='Input text'
      />
      <button
        // onClick={() => {
        //   dispatch(setSearch(input));
        //   dispatch(setPage(1));
        //   dispatch(setNeedLoading(true));
        //   localStorage.setItem('search', input);
        // }}
        type='button'
        className={sharedStyles.button}
      >
        Search
      </button>
    </div>
  );
}

export default Search;
