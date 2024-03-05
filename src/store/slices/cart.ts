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
            const existingProductIndex = state.products.findIndex((product: any) => product._id === productToAdd._id);
            if (existingProductIndex !== -1) {
                // Якщо товар вже є у корзині, збільшуємо кількість на один
                state.products[existingProductIndex].quantity++;
            } else {
                // Якщо товару немає у корзині, додаємо новий екземпляр
                state.products.push({ ...productToAdd, quantity: 1 });
            }
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload;
            state.products = state.products.filter((product: any) => product._id !== productIdToRemove);
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        updateQuantity: (state, action) => {
            const { productId, newQuantity } = action.payload;
            const productToUpdate = state.products.find((product: any) => product._id === productId);
            if (productToUpdate) {
                productToUpdate.quantity = newQuantity;
                localStorage.setItem("cartProducts", JSON.stringify(state.products));
            }
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
