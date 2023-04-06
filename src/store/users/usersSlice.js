import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";

const url = 'https://randomuser.me/api/?results=5';

export const getUsers = createAsyncThunk('user/getUsers', async (action, thunkAPI) => {
    try{
        const resp = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application.json'
            }
        });
        const data = await resp.json();
        console.log(data);
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue('Thunk Error')
    }
})

const initialState= {
    users: [],
    isLoading: true,
    error: undefined,
}

const usersSlice = createSlice({
    name: 'user',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(getUsers.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false;
            state.users = action.payload.results;
          })
          .addCase(getUsers.rejected, (state) => {
            state.isLoading = false;
            state.error = 'State Error'
          })
      }
});

export default usersSlice.reducer;