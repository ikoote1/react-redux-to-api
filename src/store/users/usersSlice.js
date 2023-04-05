import { createSlice } from "@reduxjs/toolkit";

const initialState= {
    users: [],
    isLoading: true,
    error: null,
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
});

export default usersSlice.reducer;