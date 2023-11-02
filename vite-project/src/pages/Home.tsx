import React, { useState, useCallback } from 'react';

import Search from '../components/Search/Search';
import Cards from '../components/Cards/Cards';
import Pagination from '../components/Pagination/Pagination';

function Home() {
  const [search, setSearch] = useState('');
  const [cards, setCards] = useState([]);
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

  return (
    <>
      <Search
        setSearch={setSearch}
        setPage={setPage}
        setNeedLoading={setNeedLoading}
      />
      <Cards cards={cards} />
      <Pagination
        setPage={setPage}
        page={page}
        maxPage={maxPage}
        setNeedLoading={setNeedLoading}
      />
    </>
  );
}

export default Home;
