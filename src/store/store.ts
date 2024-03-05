import { configureStore } from "@reduxjs/toolkit";
import ShopsSlice from './slices/shops'
import CartSlice from './slices/cart'

const store = configureStore({
    reducer: {
        shops: ShopsSlice,
        cart: CartSlice
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production",
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;