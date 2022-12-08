import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  details: [],
  isLoading: false,
  error: null,
}

export const __getDetails = createAsyncThunk(
  'getDetails',
  async (payload, thunkAPI) => {
    console.log("dapat payload", payload)
    try {
      const { data } = await axios.get(`https://grandmadia-api.azurewebsites.net/books/${payload}`)
      console.log("data dari slice", data)
      return thunkAPI.fulfillWithValue(data['data'])
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }
  }
)

const detailSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
  },
  extraReducers:  {
    [__getDetails.pending]: (state) => {
      console.log("loading")
      state.isLoading = true
    },
    [__getDetails.fulfilled]: (state, action) => {
      state.isLoading = false
      console.log("fulfilled")
      state.details = action.payload
      // console.log(action.payload,'kt');
      state.error = null
    },
    [__getDetails.rejected]: (state, action) => {
      console.log("rejected")
      state.isLoading = false
      state.error = action.payload
    },
  },
})
export default detailSlice.reducer