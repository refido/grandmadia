import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../modules/slice";
<<<<<<< HEAD
import storesReducer from "../modules/storeSlice"
=======
import detailReducer from "../modules/detailSlice";
>>>>>>> 5f7ce2f061ae42e373d14733b6ec9a2a5e2242d2
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
