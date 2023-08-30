import * as Sentry from '@sentry/react';
import { configureStore, getDefaultMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import MovieService from "../Adaptor/MovieService";
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
           
            
        }
    }
})

// In a large scale project where there are many global ui
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

const reducer = combineReducers({
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

export const loadMovieSearchResults = (queryParams: SearchQuery) => async(dispatch: AppDispatch ,getState: () => RootState, ) => {
    try {
       dispatch(showLoader())
       const movies = await MovieService.searchForMovie(queryParams)
       dispatch(initialiazeSearchResult(movies))
       dispatch(hideLoader())
    } catch (error) {
        Sentry.captureException(error)
        dispatch(hideLoader())
    }
}


export const {initialiazeSearchResult} = movieSlice.actions

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store