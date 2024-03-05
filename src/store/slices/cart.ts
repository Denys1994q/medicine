import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    products: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            state.products.push(productToAdd);
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload;
            state.products = state.products.filter((product: any) => product.id !== productIdToRemove);
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
