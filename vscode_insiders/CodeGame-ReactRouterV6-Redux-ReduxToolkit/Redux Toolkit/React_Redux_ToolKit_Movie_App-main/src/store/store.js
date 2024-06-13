import {configureStore} from '@reduxjs/toolkit'
import genreSlice from '../features/genreSlice'
import homeSlice from '../features/homeSlice'
import moviesListSlice from '../features/moviesListSlice'
import seriesListSlice from '../features/seriesListSlice'
import movieDetailsSlice from '../features/movieDetailsSlice'
export const store=configureStore({
reducer:{
genreList:genreSlice,
home:homeSlice,
moviesList:moviesListSlice ,
seriesList:seriesListSlice,
movieDetails:movieDetailsSlice,
}

})