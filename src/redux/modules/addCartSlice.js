import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    message: [],
    isLoading2: false,
    error2: null
};

export const __addCartItem = createAsyncThunk(
    'addCartItem',
    async ({ tokobookId, jumlah }, thunkAPI) => {
        try {
            const data = await axios.post(
                "https://grandmadia-api.azurewebsites.net/cart",
                {
                    tokobookId: tokobookId,
                    jumlah: jumlah
                }
            );
            return thunkAPI.fulfillWithValue(data);
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const addCartItemSlice = createSlice({
    name: 'addCartItem',
    initialState,
    reducers: {},
    extraReducers: {
        [__addCartItem.pending]: (state) => {
            state.isLoading2 = true;
        },
        [__addCartItem.fulfilled]: (state, action) => {
            state.isLoading2 = false;
            state.message = action.payload;
            state.error2 = null;
        },
        [__addCartItem.rejected]: (state, action) => {
            state.isLoading2 = false;
            state.error2 = action.payload;
        }
    }
});

export default addCartItemSlice.reducer;