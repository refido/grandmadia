import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    bookstores: [],
    isLoading: false,
    error: null
};

export const __getStores = createAsyncThunk (
    'getStores',
    async (payload, thunkAPI) => {
        try {
            const { data } = await axios.get(`https://grandmadia-api.azurewebsites.net/books/${payload}/store`);
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const storesSlice = createSlice ({
    name: "bookstores",
    initialState,
    reducers: {
        [__getStores.pending]: (state) => {
            state.isLoading = true;
        },
        [__getStores.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.bookstores = action.payload;
        },
        [__getStores.rejected]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    },
    extraReducers: {}
});

export default storesSlice.reducer;