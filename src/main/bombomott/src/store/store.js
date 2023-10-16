import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const isLoading = createSlice({ // 로딩 완료시 false
    name: 'isLoading',
    initialState : false,
    reducers: {
        setIsLoading: (state, action) => {
            return action.payload;
        }
    },
});

export const { setIsLoading } = isLoading.actions;

const isDragging = createSlice({
    name: 'isDragging',
    initialState : false,
    reducers: {
        setIsDragging: (state, action) => {
            return action.payload;
        }
    },
});

export const { setIsDragging } = isDragging.actions;

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

let movie = createSlice({
    name : 'movie',
    initialState : [],
    reducers : {
        setMovie(state, action){
            return action.payload
        }
    }
})

export let { setMovie } = movie.actions

export default configureStore({
    reducer: {
        trendMovies : trendMovies.reducer,
        tvShow : tvShow.reducer,
        isLoading : isLoading.reducer,
        isDragging : isDragging.reducer
    }
}) 