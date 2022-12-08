import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  checkout: [],
  isLoading: false,
  error: null,
}

export const __getCheckout = createAsyncThunk(
  'getCheckout',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get(`https://grandmadia-api.azurewebsites.net/cart`)
      return thunkAPI.fulfillWithValue(data)
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
  },
  extraReducers:  {
    [__getCheckout.pending]: (state) => {
      state.isLoading = true
    },
    [__getCheckout.fulfilled]: (state, action) => {
      state.isLoading = false
      state.checkout = action.payload
      state.error = null
    },
    [__getCheckout.rejected]: (state, action) => {
      console.log("rejected")
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export default checkoutSlice.reducer