import { productList } from "@/app-example/hooks/productHooks"
import { createSlice } from "@reduxjs/toolkit"


interface productState {
    product : productList[]
}

const initialState: productState = {
    product: []
}

export const ownedProduct = createSlice({
    name : 'ownPro',
    initialState,
    reducers: {
        addProduct : (state, action) => {
            state.product.push(action.payload)
        },
        removeProduct : (state, action) => {
            state.product = state.product.filter((product) => product.id !== action.payload.id)
        }
    }
})

export const {addProduct, removeProduct} = ownedProduct.actions
export default ownedProduct.reducer