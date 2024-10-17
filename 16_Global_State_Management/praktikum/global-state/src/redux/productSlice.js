import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    product: [
        {
            id: 1,
            name: "Clothes",
            category: "bag",
            image: "default.png",
            condition: "brand new",
            description: "test",
            price: 44,
        },
    ],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.product = [...state.product, action.payload];
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

export const { addProduct, deleteProduct, updateProduct } = productSlice.actions;

export default productSlice.reducer;
