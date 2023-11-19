import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '../utils/redux/store';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import Pagination from '../components/Pagination/Pagination';
import { useGetCardsQuery } from '../utils/redux/redux_api';
import {
  setCards,
  setMaxPage,
  setNeedLoading,
} from '../utils/redux/reducers/cardsReducer';

function Home() {
  const page = useSelector((state: RootState) => state.cards.page);
  const search = useSelector((state: RootState) => state.search.value);

  const dispatch = useDispatch();
  const { data = [], isLoading } = useGetCardsQuery({ page, search });

  dispatch(setCards(data.results));
  dispatch(setMaxPage(Math.ceil(data.count / 10)));
  dispatch(setNeedLoading(false));

  return (
    <>
      <Search />
      {isLoading ? <h1>Loading...</h1> : <Cards />}
      <Pagination />
    </>
  );
}

export default Home;
