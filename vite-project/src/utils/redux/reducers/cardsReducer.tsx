import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Card } from '../../../types';

export interface CardsState {
  cards: Card[] | [];
  page: number;
  maxPage: number;
  needLoading: boolean;
}

const initialState: CardsState = {
  cards: [],
  page: 1,
  maxPage: 0,
  needLoading: true,
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    setCards: (state, action: PayloadAction<Card[] | []>) => {
      state.cards = action.payload;
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setMaxPage: (state, action: PayloadAction<number>) => {
      state.maxPage = action.payload;
    },
    setNeedLoading: (state, action: PayloadAction<boolean>) => {
      state.needLoading = action.payload;
    },
  },
});

export const { setCards, setPage, setMaxPage, setNeedLoading } =
  cardsSlice.actions;

const cardsReducer = cardsSlice.reducer;
export default cardsReducer;
