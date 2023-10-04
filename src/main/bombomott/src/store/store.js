import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

let trendMovies = createSlice({
    name : 'trendMovies',
    initialState : [],
    reducers : {
        setTrendMovies(state, action){
            return action.payload
        }
    }
})

export let { setTrendMovies } = trendMovies.actions

let tvShow = createSlice({
    name : 'tvShow',
    initialState : [],
    reducers : {
        setTvShow(state, action){
            return action.payload
        }
    }
})

export let { setTvShow } = tvShow.actions

export default configureStore({
    reducer: {
        trendMovies : trendMovies.reducer,
        tvShow : tvShow.reducer
    }
}) 