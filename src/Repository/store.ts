import { configureStore, getDefaultMiddleware, createSlice, PayloadAction } 
from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import MovieService from "../Adaptor/MovieAdaptor";
import { Movie, SearchQuery } from "../Service/DTOs";

type MovieSliceProps = {
    searchResults: Movie[]
}
const movieSlice = createSlice({
    name: "movies",
    initialState: {
        searchResults: []
    } as MovieSliceProps,
    reducers: {
        initialiazeSearchResult: (state, action: PayloadAction<Movie[]>) => {
            state.searchResults = action.payload
        },

        resetSearchResults: (state) => {
            state.searchResults = []
        }
    }
})

// In a large scale project(when this grows bigger) where there are many global ui
// states, this will probably have to get its own separate
//file. For now, I think we are good to go.

type UISliceProps = {
    showingLoader: boolean
}

const uiSlice = createSlice({
    name: "ui",
    initialState: {
        showingLoader: false
    } as UISliceProps,
    reducers: {
        showLoader: (state) => {
            state.showingLoader = true
        },
        
        hideLoader: (state) => {
            state.showingLoader = false
        }
    }
})

export const reducer = combineReducers({
    movies: movieSlice.reducer,
    ui: uiSlice.reducer
})


const store = configureStore({
    reducer: reducer,
    middleware: [...getDefaultMiddleware({
        serializableCheck: false
    })]
})

const {hideLoader, showLoader} = uiSlice.actions

export const loadMovieSearchResults = (queryParams: SearchQuery) => 
async(dispatch: AppDispatch) => {
    try {
       dispatch(showLoader())
       const movies = await MovieService.searchForMovie(queryParams)
       dispatch(initialiazeSearchResult(movies))
       dispatch(hideLoader())
    } catch (error) {
        dispatch(resetSearchResults())
        dispatch(hideLoader())
    }
}


export const {initialiazeSearchResult, resetSearchResults} = movieSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store