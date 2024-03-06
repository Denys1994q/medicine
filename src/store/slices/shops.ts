import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const getAllShops = createAsyncThunk(
    "shops/getAllShops",
    async () => {
        const response = await fetch("http://localhost:4444/shops");
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
    async ({id}: any) => {
        const response = await fetch(`http://localhost:4444/medicinesDD/${id}`);
        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Failed to get orders history');
        }
        const data = await response.json();
        return data;
    }
);


const initialState: any = {
    shops: [],
    getAllShopsLoading: false,
    getAllShopsError: false,
    activeShopId: '',
    getOneShopMedicinesLoading: false,
    getOneShopMedicinesError: false
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
                state.getAllShopsError = false;
            })
            .addCase(getAllShops.fulfilled, (state, action) => {
                state.shops = action.payload;
                state.getAllShopsLoading = false;
                state.getAllShopsError = false;
            })
            .addCase(getAllShops.rejected, (state, action) => {
                state.getAllShopsError = action.error.message;
                state.createNewBicycleLoading = false;
            })
            // get one shop medicines
            .addCase(getOneShopMedicines.pending, (state) => {
                state.getOneShopMedicinesLoading = true
                state.getOneShopMedicinesError = false
            })
            .addCase(getOneShopMedicines.fulfilled, (state, action) => {
                const medicines = action.payload; 
                const shopId = medicines[0].shop_id
                const shopIndex = state.shops.findIndex((shop: any) => shop._id === shopId);
                if (shopIndex !== -1) {
                    state.shops[shopIndex].medicines = medicines;
                }
                state.activeShopId = shopId
                state.getOneShopMedicinesLoading = false
                state.getOneShopMedicinesError = false
            })
            .addCase(getOneShopMedicines.rejected, (state, action) => {
                state.getOneShopMedicinesLoading = false
                state.getOneShopMedicinesError = action.error.message
            })
    }
  });

const { actions, reducer } = ShopsSlice;

export default reducer;

export const {setActiveShopId} = actions;