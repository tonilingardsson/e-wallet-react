import { configureStore } from '@reduxjs/toolkit';
import cardsReducer from './cardSlice';

// For me to learn: This is where important app data lives. 
// Any component connected (import {store}...) to it can read the data
export const store = configureStore({
  reducer: {
    wallet: cardsReducer,
  },
});