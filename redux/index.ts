import { configureStore } from "@reduxjs/toolkit"
import walletReducer from "./wallet"
import productReducer from "./boughtProduct"
import searchReducer from "./searchFeature"
import themeReducer from "./theme"


export const store = configureStore({
    reducer : {
        wallet : walletReducer,
        products : productReducer,
        search : searchReducer,
        theme : themeReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch