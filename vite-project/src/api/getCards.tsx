import baseUrl from '../utils/constants';

const getCards = async (page: number, search: string) => {
  const url =
    `${baseUrl}?` +
    `page=${page}${search ? `&search=${search.split(' ').join('+')}` : ''}`;

  return fetch(url, {
    method: 'GET',
    headers: { 'content-type': 'application/json' },
  })
    .then((res) => res.json())
    .catch((e) => e);
};

export default getCards;
