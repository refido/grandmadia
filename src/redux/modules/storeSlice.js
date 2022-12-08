import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    bookstores: [],
    isLoading1: false,
    error1: null
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
    reducers: {},
    extraReducers: {
        [__getStores.pending]: (state) => {
            state.isLoading1 = true;
        },
        [__getStores.fulfilled]: (state, action) => {
            state.isLoading1 = false;
            state.bookstores = action.payload;
            state.error1 = null;
        },
        [__getStores.rejected]: (state, action) => {
            state.isLoading1 = false;
            state.error1 = action.payload;
        }
    }
});

export default storesSlice.reducer;