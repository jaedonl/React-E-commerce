import { createSlice } from "@reduxjs/toolkit"

const productSlice = createSlice({
    name: 'product', 
    initialState: {
        products : [],
        isFetching: false,
        error: false
    },
    reducers: {
        // GET ALL
        getProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        getProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        },
        getProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },

        
        // Delete
        deleteProductStart: (state) => {
            state.isFetching = true 
            state.error = false
        },
        deleteProductSuccess: (state, action) => { // in this case, 'id' from product in DB is an action value
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload), 1
            );
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },


        // Update
        updateProductStart: (state) => {
            state.isFetching = true
            state.error = false
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.products
        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    }
})

export const { 
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure

} = productSlice.actions;

export default productSlice.reducer