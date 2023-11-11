import React, { createContext } from 'react';

export type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export const CardsContext = createContext([]);
export const SearchContext = createContext<SearchContextType>({
  search: '',
  setSearch: () => {},
});
