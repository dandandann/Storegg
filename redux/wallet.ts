import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface CoinState {
    coins : number
}

const initialState:CoinState = {
    coins: 500
}


export const walletOperate = createSlice({
    name : 'wallet',
    initialState,
    reducers: {
        addCoin : (state, action: PayloadAction<number>) => {
            state.coins += action.payload
        },
        minCoins : (state, action : PayloadAction<number>) => {
            state.coins -= action.payload
        }
    }
})


export const { addCoin, minCoins} = walletOperate.actions
export default walletOperate.reducer