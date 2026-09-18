import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cards: [
    {
      id: 1,
      cardNumber: '1234 1234 1234 1111',
      cardHolder: 'Ada Lovelace',
      expireMonth: 12,
      expireYear: 26,
      cvv: 123,
      vendor: 'IKEA Bank',
      isActive: true,
    },
  ],
};

const cardSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      action.payload.isActive = state.cards.length === 0;
      state.cards.push(action.payload);
    },
    setActiveCard: (state, action) => {
      const targetId = action.payload;
      state.cards.forEach((card) => {
        card.isActive = card.id === targetId;
      });
    },
  },
});

export const { addCard, setActiveCard } = cardSlice.actions;
export default cardSlice.reducer;