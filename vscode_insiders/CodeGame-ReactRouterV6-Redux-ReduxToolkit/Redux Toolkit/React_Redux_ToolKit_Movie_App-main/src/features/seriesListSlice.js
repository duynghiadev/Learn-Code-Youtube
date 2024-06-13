import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../ِAPI/fetchData";
export const seriesList = createAsyncThunk('seriesListSlice/seriesList', fetchData);

const initialState = {

    list: [],
    error: false,
    isLoading: false,
    page: null,
    total_pages: null,
    total_results: null
}


let seriesListSlice = createSlice({
    name: 'seriesList',
    initialState,
    extraReducers: (reducer) => {
        reducer


            .addCase(seriesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(seriesList.fulfilled, (state, action) => {
                state.list = action.payload.results;
                state.page = action.payload.page;
                state.total_pages = action.payload.total_pages;
                state.isLoading = false;
            })
            .addCase(seriesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })








    }
})

export default seriesListSlice.reducer;