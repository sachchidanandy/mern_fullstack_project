import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    status: 'idle',
    userDetails: null,
    error: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: state => {
            localStorage.removeItem('user');
        },
    },
    extraReducers: builder => {
        builder
            .addCase('auth/login/pending', (state, action) => {
                state.status = 'loading';
                state.error = null;
                state.userDetails = null;
            })
            .addCase('auth/login/fulfilled', (state, action) => {
                state.status = 'succeeded';
                state.userDetails = action.payload;
                state.error = null;
                localStorage.setItem('user', JSON.stringify(action.payload));
            })
            .addCase('auth/login/rejected', (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
                state.userDetails = null;
            });
    },
});

// Export actions
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
