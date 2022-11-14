import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../modules/slice'
const store=configureStore({
    reducer:{
        books:bookReducer
    },
})
export default store