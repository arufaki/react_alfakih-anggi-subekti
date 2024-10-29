import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    product: [],
    error: null,
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProductSuccess: (state, action) => {
            state.product = [...state.product, action.payload];
            state.error = null;
        },

        addProductError: (state, action) => {
            state.error = action.payload;
        },
        
        deleteProduct: (state, action) => {
            state.product = state.product.filter((item) => item.id !== action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.product.findIndex((item) => item.id === action.payload.id);
            if (index !== -1) {
                state.product[index] = {
                    ...state.product[index],
                    ...action.payload,
                };
            }
        },
    },
});

export const { addProductSuccess, addProductError, deleteProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;
