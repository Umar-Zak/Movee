import { AnyAction } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import  axios from "axios"
import AxiosMockAdapter from "axios-mock-adapter"
import {SearchQuery} from "../Service/DTOs";
import Store, {loadMovieSearchResults, reducer} from "../Repository/store";


let store: typeof Store
let dispatch: typeof Store.dispatch
let getState: typeof Store.getState
let searchResults: typeof sampleMovieResarchResponse = []
const mockAdapter = new AxiosMockAdapter(axios)
const sampleMovieResarchResponse = [
    {
    Actors: ["Acor 1", "Actor 2"],
    Rated: "N/A",
    Country: "Ghana",
    Director: "Umar Zak",
    Genre: "Educational",
    Language: "English",
    Plot: "Some plot",
    Released: "05 May 2017",
    Runtime: "123 min",
    Title: "My movie"
    }
]

const sampleSearchQuery: SearchQuery = {
    title: "movie",
    plot: "full",
    year: "2020"
}

describe("App state", () => {
    // We want our store to have a clean state before each test runs.
    beforeEach(() => {
        store = configureStore({
            reducer,
            middleware: [...getDefaultMiddleware({
                serializableCheck: false
            })]
        })
        dispatch = store.dispatch
        getState = store.getState
    })

    it("Should populate app state with searched movie results", async() => {
      mockAdapter.onGet("", {
        params: {
            t: sampleSearchQuery.title,
            y: sampleSearchQuery.year,
            plot: sampleSearchQuery.plot
        }
      }).reply(200, sampleMovieResarchResponse)
      await dispatch(loadMovieSearchResults(sampleSearchQuery) as unknown as AnyAction)
      searchResults = getState().movies.searchResults
      expect(searchResults.length).toBeGreaterThan(0)
      expect(searchResults).toEqual(sampleMovieResarchResponse)
    })
    

    it("Should not update app state when search return with an error", async() => {
        sampleSearchQuery.title = "Invalid Title"
        mockAdapter.onGet("", {
            params: {
                t: sampleSearchQuery.title,
                y: sampleSearchQuery.year,
                plot: sampleSearchQuery.plot
            }
        }).reply(400)
        await dispatch(loadMovieSearchResults(sampleSearchQuery) as unknown as AnyAction)
        searchResults = getState().movies.searchResults
        expect(searchResults.length).toBe(0)
    })
})


