import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        updateCart: (state, action) => {
            const product = action.payload
            if (state.cart.length === 0) {
                state.cart = [product]
            }
            else {
                const index = state.cart.findIndex(item => item.id === product.id)
                if (index === -1) {
                    state.cart = [...state.cart, product]
                }
                else {
                    state.cart[index].quantity += product.quantity
                }
            }

        },
        increment: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            let qty =  state.cart[index].quantity + 1
            state.cart[index].quantity = qty
            state.cart[index].totalPrice = qty * state.cart[index].price
        },
        decrement: (state, action) => {
            const index = state.cart.findIndex(item => item.id === action.payload.id)
            if (state.cart[index].quantity > 1) {
            let qty =  state.cart[index].quantity - 1
            state.cart[index].quantity = qty
            state.cart[index].totalPrice = qty * state.cart[index].price
            }
        },

    },
})

export const { updateCart, increment, decrement } = cartSlice.actions

export default cartSlice.reducer