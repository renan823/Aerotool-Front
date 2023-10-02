import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        signed: false,
        token: null,
        user: null
    },
    reducers: {
        setAuth: (state, action) => {
            const { user, signed, token } = action.payload;

            state.signed = signed;
            state.token = token;
            state.user = user;
        },
        removeAuth: (state, action) => {
            state.signed = false;
            state.token = null;
            state.user = null;
        }
    }
})

export const { setAuth, removeAuth } = authSlice.actions;
export default authSlice.reducer;

