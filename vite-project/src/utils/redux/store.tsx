import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import cardsReducer from './reducers/cardsReducer';
import searchReducer from './reducers/searchReducer';
import { cardsApi } from './redux_api';

export const store = configureStore({
  reducer: {
    [cardsApi.reducerPath]: cardsApi.reducer,
    cards: cardsReducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cardsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

setupListeners(store.dispatch);
