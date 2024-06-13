import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../ِAPI/fetchData";


export const movieDetails = createAsyncThunk('movieDetailsSlice/movieDetails', fetchData);
export const movieCast = createAsyncThunk('movieDetailsSlice/movieCast', fetchData);
export const movieKeywords = createAsyncThunk('movieDetailsSlice/movieKeywords', fetchData);


const initialState = {

    data:{} ,
    error: false,
    isLoading: false,
    keywords:[],
    keywordsIsLoading:false,
    keywordsError:null,
    cast:[],
    castIsLoading:false,
    castError:null
}





let movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState,
    extraReducers: (reducer) => {
        reducer
            .addCase(movieDetails.pending, (state, action) => {
                state.isLoading = true;
                state.error = false;
            })
            .addCase(movieDetails.fulfilled, (state, action) => {
                state.data = action.payload;
                state.isLoading = false;
            })
            .addCase(movieDetails.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
            .addCase(movieKeywords.pending, (state, action) => {
                state.keywordsIsLoading = true;
                state.keywordsError = false;
            })
            .addCase(movieKeywords.fulfilled, (state, action) => {
                state.keywords = action.payload;
                state.keywordsIsLoading = false;
            })
            .addCase(movieKeywords.rejected, (state, action) => {
                state.keywordsIsLoading = false;
                state.keywordsError = action.payload;
            })
            .addCase(movieCast.pending, (state, action) => {
                state.castIsLoading = true;
                state.castError = false;
            })
            .addCase(movieCast.fulfilled, (state, action) => {
                state.cast = action.payload.cast;
                state.castIsLoading = false;
            })
            .addCase(movieCast.rejected, (state, action) => {
                state.castIsLoading = false;
                state.castError = action.payload;
            })








    }
})

export default movieDetailsSlice.reducer;