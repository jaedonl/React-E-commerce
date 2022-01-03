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
            console.log('start')
        },
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[
                state.products.findIndex((item) => item._id === action.payload.id)
            ] = action.payload.products
            console.log('done', action.payload)            
        },
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
            console.log('error')
        },

        // // Add
        // addProductStart: (state) => {
        //     state.isFetching = true
        //     state.error = false
        // },
        // addProductSuccess: (state, action) => {

        // },
        // addProductFailure: (state) => {
        //     state.isFetching = false;
        //     state.error = true;
        // },
    }
})

export const { 
    getProductStart, getProductSuccess, getProductFailure,
    deleteProductStart, deleteProductSuccess, deleteProductFailure,
    updateProductStart, updateProductSuccess, updateProductFailure,

} = productSlice.actions;

export default productSlice.reducer