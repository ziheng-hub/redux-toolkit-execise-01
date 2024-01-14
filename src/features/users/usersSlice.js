import { createSlice } from "@reduxjs/toolkit";

const initialState = [{ id: "1", name: "zihenghub"}];

const usersSlice = createSlice({
    name:"users",
    initialState:initialState,
    reducers:{}
})


export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;