import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { useState } from 'react'

const isLoading = createSlice({
    name: 'isLoading',
    initialState : true,
    reducers: {
        setLoading: (state, action) => {
            return action.payload;
        }
    },
});

export const { setLoading } = isLoading.actions;

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

export default configureStore({
    reducer: {
        trendMovies : trendMovies.reducer,
        tvShow : tvShow.reducer,
        isLoading : isLoading.reducer,
        isDragging : isDragging.reducer
    }
}) 