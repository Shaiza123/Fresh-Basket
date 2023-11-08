import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './CartReducer';
import dataSlice from './DataReducer'

let store = configureStore({
    reducer: {
        cart: cartSlice,
        data:dataSlice
        
    },
})


export default store;




