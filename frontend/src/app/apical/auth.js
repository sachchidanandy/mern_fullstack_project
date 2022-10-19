import { apiClient } from './axiosConfig';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Thunk function to handle async calls
export const userLogin = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
    try {
        return (await apiClient.post('/auth/login', payload)).data;
    } catch (error) {
        return rejectWithValue(
            (error && error.response && error.response.data) || 'Something went wrong',
        );
    }
});

export const registerUser = createAsyncThunk('auth/login', async (payload, { rejectWithValue }) => {
    try {
        return (await apiClient.post('/auth/register', payload)).data;
    } catch (error) {
        return rejectWithValue(
            (error && error.response && error.response.data) || 'Something went wrong',
        );
    }
});
