import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";
import { ShopsState } from "./models/shops";

export const getAllShops = createAsyncThunk(
    "shops/getAllShops",
    async () => {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/shops`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get orders history');
        }
        const data = await response.json();
        return data;
    }
);

export const getOneShopMedicines = createAsyncThunk(
    "shops/getOneShopMedicines",
    async ({id}: {id: string}) => {
        const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/medicines/${id}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get orders history');
        }
        const data = await response.json();
        return data;
    }
);


const initialState: ShopsState = {
    shops: [],
    activeShopId: '',
    getAllShopsLoading: false,
    getAllShopsError: '',
    getOneShopMedicinesLoading: false,
    getOneShopMedicinesError: ''
};

const ShopsSlice = createSlice({
    name: "shops",
    initialState,
    reducers: {
        setActiveShopId: (state, action) => {
            state.activeShopId = action.payload;
        }
    },
    extraReducers: builder => {
        builder 
        // get shops list
            .addCase(getAllShops.pending, state => {
                state.getAllShopsLoading = true;
                state.getAllShopsError = '';
            })
            .addCase(getAllShops.fulfilled, (state, action) => {
                state.shops = action.payload;
                state.getAllShopsLoading = false;
                state.getAllShopsError = '';
            })
            .addCase(getAllShops.rejected, (state, action) => {
                if (action.error.message) {
                    state.getAllShopsError = action.error.message;
                }
                state.getAllShopsLoading = false;
            })
            // get one shop medicines
            .addCase(getOneShopMedicines.pending, (state) => {
                state.getOneShopMedicinesLoading = true
                state.getOneShopMedicinesError = ''
            })
            .addCase(getOneShopMedicines.fulfilled, (state, action) => {
                const medicines = action.payload; 
                const shopId = medicines[0].shop_id
                const shopIndex = state.shops.findIndex(shop => shop._id === shopId);
                if (shopIndex !== -1) {
                    state.shops[shopIndex].medicines = medicines;
                }
                state.activeShopId = shopId
                state.getOneShopMedicinesLoading = false
                state.getOneShopMedicinesError = ''
            })
            .addCase(getOneShopMedicines.rejected, (state, action) => {
                state.getOneShopMedicinesLoading = false
                if (action.error.message) {
                    state.getOneShopMedicinesError = action.error.message
                }
            })
    }
  });

const { actions, reducer } = ShopsSlice;

export default reducer;

export const {setActiveShopId} = actions;