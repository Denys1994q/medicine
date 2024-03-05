import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {
    products: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            state.products.push(productToAdd);
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload;
            state.products = state.products.filter((product: any) => product._id !== productIdToRemove);
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
