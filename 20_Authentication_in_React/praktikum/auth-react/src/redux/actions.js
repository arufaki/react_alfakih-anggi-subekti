import { addProductSuccess, addProductError } from "./productSlice";

export const addProduct = (products) => {
    return (dispatch, getState) => {
        const { product } = getState().products;
        const productExists = product.find((p) => p.name === products.name);

        if (productExists) {
            dispatch(addProductError("Product name Already Exists"));
        } else {
            dispatch(addProductSuccess(products));
        }
    };
};
