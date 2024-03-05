import { createSlice, createAsyncThunk  } from "@reduxjs/toolkit";

export const getAllShops = createAsyncThunk(
    "shops/getAllShops",
    async () => {
      const response = await fetch("http://localhost:4444/shops");
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData[0].msg || 'Failed to get shops list');
      }
  
      const data = await response.json();
      return data;
    }
);


const initialState: any = {
    shops: [],
    getAllShopsLoading: false,
    getAllShopsError: false
};

const ShopsSlice = createSlice({
    name: "shops",
    initialState,
    reducers: {},
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
                if (action.error.message) {
                    state.getAllShopsError = true;
                    // state.createNewBicycleErrorMsg = action.error.message;
                    state.getAllShopsLoading = false;
                } else {
                    state.getAllShopsError = true;
                    // state.createNewBicycleErrorMsg = 'An error occurred';
                    state.createNewBicycleLoading = false;
                }
            })
    }
  });

const { actions, reducer } = ShopsSlice;

export default reducer;

export const {} = actions;