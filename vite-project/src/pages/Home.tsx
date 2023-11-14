import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../utils/redux/store';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import Pagination from '../components/Pagination/Pagination';
import getCards from '../api/getCards';
import {
  setCards,
  setMaxPage,
  setNeedLoading,
} from '../utils/redux/reducers/cardsReducer';

function Home() {
  const page = useSelector((state: RootState) => state.cards.page);
  const search = useSelector((state: RootState) => state.search.value);
  const needLoading = useSelector(
    (state: RootState) => state.cards.needLoading
  );
  const dispatch = useDispatch();

  React.useEffect(() => {
    if (needLoading) {
      getCards(page, search).then((res) => {
        dispatch(setCards(res.results));
        dispatch(setMaxPage(Math.ceil(res.count / 10)));
        dispatch(setNeedLoading(false));
      });
    }
  }, [dispatch, page, search, needLoading]);

  return (
    <>
      <Search />
      <Cards />
      <Pagination />
    </>
  );
}

export default Home;
