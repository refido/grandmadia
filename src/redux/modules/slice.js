import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  books: [],
  isLoading: false,
  error: null,
}
export const __getBooks = createAsyncThunk(
  'getBooks',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axios.get('https://grandmadia-api.azurewebsites.net/books')
      // console.log(data['data'],'data');
      // console.log(data[1]);
      // console.log(data[8]);
      return thunkAPI.fulfillWithValue(data['data'])
    } catch (e) {
      return thunkAPI.rejectWithValue(e)
    }

  }
)
const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    // getTodos(state,action){
    //     state.todos=action.payload
    // }
  },
  extraReducers:  {
    [__getBooks.fulfilled]: (state, action) => {
      state.isLoading = false
      state.books = action.payload
      // console.log(action.payload,'kt');
      state.error = null
    },
    [__getBooks.rejected]: (state, action) => {
      state.isLoading = false
      state.error = action.payload
    },
    [__getBooks.pending]: (state) => {
      state.isLoading = true
    },
  },
})
export default bookSlice.reducer