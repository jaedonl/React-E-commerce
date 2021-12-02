import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartRedux';

export default configureStore({
    reducer: {
        cart: cartReducer,

    }
}) 

// 그냥 가져와서 호출하는거면 useSelctor() 훅 in Redux
// Action 을 쓰고 싶으면, useDispatch() 훅 in Redux