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
            state.isFetching
        }
    }
})

export const {  } = productSlice.actions;

export default productSlice.reducer