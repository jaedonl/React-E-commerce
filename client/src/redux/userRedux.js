import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: 'user', 
    initialState: {
        currentUser : null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state, action) => {

        },

    }
})

export const { addProduct, minusProduct } = cartSlice.actions;

export default cartSlice.reducer