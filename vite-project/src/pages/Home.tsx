import React, { useState, useCallback, useMemo } from 'react';
import { CardsContext, SearchContext } from '../utils/Context';
import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import Pagination from '../components/Pagination/Pagination';

function Home() {
  const [cards, setCards] = useState([]);
  const [search, setSearch] = useState(localStorage.getItem('search') || '');
  const [page, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(0);
  const [needLoading, setNeedLoading] = useState(true);

  const getCards = useCallback(() => {
    let baseUrl = `https://swapi.dev/api/vehicles/?page=${page}`;
    baseUrl = search
      ? `${baseUrl}&search=${search.split(' ').join('+')}`
      : baseUrl;

    fetch(baseUrl, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        setCards(res.results);
        setMaxPage(Math.ceil(res.count / 10));
        setNeedLoading(false);
      })
      .catch((e) => e);
  }, [search, page]);

  React.useEffect(() => {
    if (needLoading) {
      getCards();
    }
  }, [search, page, cards, getCards, needLoading]);

  const searchState = useMemo(() => ({ search, setSearch }), [search]);

  return (
    <CardsContext.Provider value={cards}>
      <SearchContext.Provider value={searchState}>
        <Search setPage={setPage} setNeedLoading={setNeedLoading} />
        <Cards />
        <Pagination
          setPage={setPage}
          page={page}
          maxPage={maxPage}
          setNeedLoading={setNeedLoading}
        />
      </SearchContext.Provider>
    </CardsContext.Provider>
  );
}

export default Home;
