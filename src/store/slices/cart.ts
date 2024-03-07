import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { CartState, OrderHistory } from "./models/cart";
import { Order } from "./models/cart";

export const createOrder = createAsyncThunk(
    "cart/createOrder",
    async ({order}: {order: Order}) => {
        const response = await fetch('http://localhost:4444/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
        });
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get orders history');
        }
        const data = await response.json();
        return data;
    }
);

export const getOrdersHistory = createAsyncThunk(
    "cart/getOrdersHistory",
    async ({email}: {email: string}) => {
        const response = await fetch(`http://localhost:4444/ordersHistory/${email}`)
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get orders history');
        }
        const data = await response.json();
        return data;
    }
);

const initialState: CartState = {
    products: JSON.parse(localStorage.getItem("cartProducts") || "[]"),
    userOrders: [],
    userOrdersLoading: false,
    userOrdersError: '',
    orderIsConfirmed: false,
    createOrderError: ''
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const productToAdd = action.payload;
            const existingProductIndex = state.products.findIndex(product => product._id === productToAdd._id);
            if (existingProductIndex !== -1) {
                state.products[existingProductIndex].quantity++;
            } else {
                state.products.push({ ...productToAdd, quantity: 1 });
            }
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        removeFromCart: (state, action) => {
            const productIdToRemove = action.payload;
            state.products = state.products.filter(product => product._id !== productIdToRemove);
            localStorage.setItem("cartProducts", JSON.stringify(state.products));
        },
        updateQuantity: (state, action) => {
            const { productId, newQuantity } = action.payload;
            const productToUpdate = state.products.find(product => product._id === productId);
            if (productToUpdate) {
                productToUpdate.quantity = newQuantity;
                localStorage.setItem("cartProducts", JSON.stringify(state.products));
            }
        },
        resetOrderStatus: (state) => {
            state.orderIsConfirmed = false
        },
        resetOrdersHistory: (state) => {
            state.userOrders = []
            state.userOrdersError = ''
        }
    },
    extraReducers: builder => {
        builder 
        // create order
            .addCase(createOrder.pending, state => {
                state.createOrderError = ''
            })
            .addCase(createOrder.fulfilled, state => {
                state.products = [];
                localStorage.removeItem('cartProducts')
                state.orderIsConfirmed = true
                state.createOrderError = ''
            })
            .addCase(createOrder.rejected, state => {
                state.createOrderError = ''
            })
        // get orders history
            .addCase(getOrdersHistory.pending, state => {
                state.userOrdersLoading = true
                state.userOrdersError = ''
            })
            .addCase(getOrdersHistory.fulfilled, (state, action) => {
                const transformedOrders = action.payload.map((order: OrderHistory) => ({
                    ...order,
                    items: order.items.map(item => ({
                        ...item,
                        image: item.productId.image,
                        name: item.productId.name
                    })),
                }));
                state.userOrders = transformedOrders
                state.userOrdersLoading = false
                state.userOrdersError = ''
            })
            .addCase(getOrdersHistory.rejected, (state, action) => {
                state.userOrders = []
                state.userOrdersLoading = false
                if (action.error.message) {
                    state.userOrdersError = action.error.message   
                }
            })
    }
});

export const { addToCart, removeFromCart, updateQuantity, resetOrderStatus, resetOrdersHistory } = cartSlice.actions;

export default cartSlice.reducer;
