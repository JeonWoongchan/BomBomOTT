<<<<<<< HEAD
import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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

export default configureStore({
    reducer: {
        trendMovies : trendMovies.reducer
    }
}) 
=======
import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const isLoading = createSlice({
  // 로딩 완료시 false
  name: "isLoading",
  initialState: false,
  reducers: {
    setIsLoading: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsLoading } = isLoading.actions;

const isDragging = createSlice({
  name: "isDragging",
  initialState: false,
  reducers: {
    setIsDragging: (state, action) => {
      return action.payload;
    },
  },
});

export const { setIsDragging } = isDragging.actions;

let trendMovies = createSlice({
  name: "trendMovies",
  initialState: [],
  reducers: {
    setTrendMovies(state, action) {
      return action.payload;
    },
  },
});

export let { setTrendMovies } = trendMovies.actions;

let tvShow = createSlice({
  name: "tvShow",
  initialState: [],
  reducers: {
    setTvShow(state, action) {
      return action.payload;
    },
  },
});

export let { setTvShow } = tvShow.actions;

let disneyMovie = createSlice({
  name: "disneyMovie",
  initialState: [],
  reducers: {
    setDisneyMovie(state, action) {
      return action.payload;
    },
  },
});

export let { setDisneyMovie } = disneyMovie.actions;

const genreMovie = createSlice({
  name: "genreMovie",
  initialState: [],
  reducers: {
    setGenreMovie: (state, action) => {
      return action.payload;
    },
    addGenreMovie: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setGenreMovie, addGenreMovie } = genreMovie.actions;

const contentDetail = createSlice({
  name: "contentDetail",
  initialState: [],
  reducers: {
    setContentDetail: (state, action) => {
      return action.payload;
    },
  },
});

export const { setContentDetail } = contentDetail.actions;

const searchMulti = createSlice({
  name: "searchMulti",
  initialState: [],
  reducers: {
    setSearchMulti: (state, action) => {
      return action.payload;
    },
    addSearchMulti: (state, action) => {
      return [...state, ...action.payload];
    },
  },
});

export const { setSearchMulti, addSearchMulti } = searchMulti.actions;

export default configureStore({
  reducer: {
    trendMovies: trendMovies.reducer,
    tvShow: tvShow.reducer,
    isLoading: isLoading.reducer,
    isDragging: isDragging.reducer,
    disneyMovie:disneyMovie.reducer,
    genreMovie: genreMovie.reducer,
    contentDetail: contentDetail.reducer,
    searchMulti: searchMulti.reducer,
  },
});
>>>>>>> 63855bb (ãchagepassword)
