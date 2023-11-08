import { createSlice } from '@reduxjs/toolkit'
import { categoryItems } from '../utils/data'

const initialState = {
    data: categoryItems,
}

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        updateFavourites: (state, action) => {
            const product = action.payload
            const index = state.data.findIndex(item => item.id === product.id)
            
            if(state.data[index].isFavourite){
                state.data[index].isFavourite = false
            }
            else{
            state.data[index].isFavourite = true
            }

        },


    },
})

export const { updateFavourites } = dataSlice.actions

export default dataSlice.reducer