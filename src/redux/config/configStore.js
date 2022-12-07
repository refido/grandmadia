import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../modules/slice";
import { userSlice } from "../modules/userSlice";
const store = configureStore({
  reducer: {
    books: bookReducer,
    user: userSlice.reducer,
  },
});
export default store;
