import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../modules/slice";
import detailReducer from "../modules/detailSlice";
import { userSlice } from "../modules/userSlice";
const store = configureStore({
  reducer: {
    books: bookReducer,
    details: detailReducer,
    user: userSlice.reducer,
  },
});
export default store;
