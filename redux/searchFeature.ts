import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface barState {
    bar : string
}

const initialState: barState = {
    bar: ''
}


export const searchProductFeature = createSlice({
    name : 'search',
    initialState,
    reducers: {
        searchProduct : (state, action: PayloadAction<string>) => {
            state.bar = action.payload
        }
    }
})

export const { searchProduct } = searchProductFeature.actions
export default searchProductFeature.reducer