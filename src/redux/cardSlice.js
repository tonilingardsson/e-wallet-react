import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // Hard coded first card so the app starts with an initial sample
    cards: [
        {
            id: 1,
            cardNumber: "1234 1234 1234 1111",
            cardHolder: "Ada Lovelace",
            expireMonth: 12,
            expireYear: 26,
            cvv: 123,
            vendor: "IKEA Bank",
            isActive: true
        },
    ],
};

const cardSlice = createSlice({
    name: "cards",
    initialState,
    reducers: {
        addCard: (state, action) => {
            // action.payload shoud be the new card object
            // if the user has no active card, make this one active
            if (state.cards.length === 0) {
                action.payload.isActive = true;
            }
            else
            {
                action.payload.isActive = false;
            }
            state.cards.push(action.payload);
        },
        setActiveCard: (state, action) => {
            const targetId = action.payload;
            state.cards.forEach((card) =>{
                card.isActive= card.id == targetId;
            });
        },
    },
});

export const { addCard, setActiveCard} = cardsSlice.actions;
export default cardSlice.reducer;