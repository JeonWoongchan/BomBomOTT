import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { useState } from "react";

const userData = createSlice({ //현재 로그인한 유저의 고유아이디
  name: "userData",
  initialState: 'user1234',
  reducers: {
      setUserData: (state, action) => {
      return action.payload;
      },
  }
});

export const { setUserData } = userData.actions;

const nowProfile = createSlice({ //현재 유저가 이용중인 프로필
  name: "nowProfile",
  initialState: '1',
  reducers: {
      setNowProfile: (state, action) => {
      return action.payload;
      },
  }
});

export const { setNowProfile } = nowProfile.actions;

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
    userData: userData.reducer,
    nowProfile: nowProfile.reducer
  },
});
