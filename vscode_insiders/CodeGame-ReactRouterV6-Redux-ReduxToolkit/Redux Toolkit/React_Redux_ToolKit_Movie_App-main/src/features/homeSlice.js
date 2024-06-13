import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../ِAPI/fetchData";



export const topList = createAsyncThunk('homeList/topMovies', fetchData);
export const trendList = createAsyncThunk('homeList/trending', fetchData);

const initialState = {
    movies: {
        list: [],
        error: false,
        isLoading: false,
        page: null,
        total_pages: null,
        total_results: null

    },
    series: {
        list: [],
        error: false,
        isLoading: false,
        page: null,
        total_pages: null,
        total_results: null
    },
    trend: {
        list: [],
        error: false,
        isLoading: false
    }
}





let homeSlice = createSlice({
    name: 'homeList',
    initialState,
    extraReducers: (reducer) => {
        reducer
            .addCase(topList.pending, (state, action) => {
                let type = action.meta.arg.type;
                state[type].isLoading = true;
                state[type].error = false;
            })
            .addCase(topList.fulfilled, (state, action) => {
                let type = action.meta.arg.type;
                state[type].list = action.payload.results;
                state[type].page = action.payload.page;
                state[type].total_pages = action.payload.total_pages;
                state[type].isLoading = false;
            })
            .addCase(topList.rejected, (state, action) => {
                let type = action.meta.arg.type;
                state[type].isLoading = false;
                state[type].error = action.payload;
            })

            .addCase(trendList.pending, (state, action) => {
                state.trend.isLoading = true;
                state.trend.error = false;
            })
            .addCase(trendList.fulfilled, (state, action) => {
                state.trend.list = action.payload.results.filter((ele) => {
                    return ele.media_type === "movie" || ele.media_type === "series"
                })
                state.trend.isLoading = false;

            })
            .addCase(trendList.rejected, (state, action) => {
                state.trend.isLoading = false;
                state.trend.error = action.payload;
            })






    }
})

export default homeSlice.reducer;