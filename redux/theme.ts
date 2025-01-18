import { createSlice } from "@reduxjs/toolkit"


interface themeState{
    theme : 'light' | 'dark'
}

const initialState: themeState = {
    theme : 'light'
}

const themeOperate = createSlice({
    name : 'theme',
    initialState,
    reducers: {
        toggleTheme : (state) => {
            state.theme = state.theme === 'light' ? 'dark' : 'light'
        }
    }
})
export const {toggleTheme} = themeOperate.actions
export default themeOperate.reducer