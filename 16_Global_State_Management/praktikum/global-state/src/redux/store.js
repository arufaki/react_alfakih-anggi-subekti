import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../redux/productSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        products: productReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});
