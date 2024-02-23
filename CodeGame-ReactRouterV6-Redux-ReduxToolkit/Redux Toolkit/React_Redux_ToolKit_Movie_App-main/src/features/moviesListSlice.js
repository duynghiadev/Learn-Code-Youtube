import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../ِAPI/fetchData";
export const moviesList = createAsyncThunk('moviesListSlice/moviesList', fetchData);


const initialState = {

    list: [],
    error: false,
    isLoading: false,
    page: null,
    total_pages: null,
    total_results: null




}





let moviesListSlice = createSlice({
    name: 'moviesList',
    initialState,
    extraReducers: (reducer) => {
        reducer
            .addCase(moviesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(moviesList.fulfilled, (state, action) => {
                state.list = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
                state.total_results = action.payload.total_results;
                state.isLoading = false;
            })
            .addCase(moviesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })








    }
})

export default moviesListSlice.reducer;