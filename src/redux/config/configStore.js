import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../modules/slice";
import storesReducer from "../modules/storeSlice"
import detailReducer from "../modules/detailSlice";
import { userSlice } from "../modules/userSlice";

const store = configureStore({
  reducer: {
    books: bookReducer,
    details: detailReducer,
    user: userSlice.reducer,
    stores: storesReducer,
  },
});

export default store;
