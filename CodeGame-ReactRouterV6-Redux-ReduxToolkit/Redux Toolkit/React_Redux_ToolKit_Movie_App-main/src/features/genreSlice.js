import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../ِAPI/fetchData";

export const genreList = createAsyncThunk('dataList/genre', fetchData);

const initialState = {
    movies: [],
    series: [],
    moviesCode: {},
    seriesCode: {},
    isLoading: false,
    error: null,
}

let LoadingFn = (state, action) => {
    state.isLoading = true;
    state.error = null;
}

let rejectedData = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
}

let genreSlice = createSlice({
    name: 'genreSlice',
    initialState,

    extraReducers: (reducer) => {
        reducer
            .addCase(genreList.pending, LoadingFn)
            .addCase(genreList.fulfilled, (state, action) => {
                let type = action.meta.arg.type;
                state[type] = action.payload.genres;
                state[type].map((ele) => {
                    state[`${type}Code`][ele.id] = ele.name;
                })
            })
            .addCase(genreList.rejected, rejectedData)


    }
})

export default genreSlice.reducer;