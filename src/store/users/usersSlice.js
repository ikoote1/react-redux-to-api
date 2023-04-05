import { createSlice } from "@reduxjs/toolkit";

initialState= {
    users: [],
    isLoading: true,
    error,
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
});

export default usersSlice.reducer;