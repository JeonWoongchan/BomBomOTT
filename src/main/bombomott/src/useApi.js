import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setLoading,
  setTrendMovies,
  setTvShow,
  setDisneyMovie,
  setGenreMovie,
} from "./store/store";
import axios from "axios";

//api 받아오는거 모음
function useApi() {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  const options1 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/movie/day?language=ko-KR",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB_API_KEY,
    },
  };

  const options2 = {
    method: "GET",
    url: "https://api.themoviedb.org/3/trending/tv/week?language=ko-KR",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB_API_KEY,
    },
  };

  const disneyMovie = {
    method: "GET",
    url: "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_companies=disney",
    headers: {
      accept: "application/json",
      Authorization: process.env.REACT_APP_TMDB_API_KEY,
    },
  };

  const getRequest = (a, b) => {
    axios
      .request(a)
      .then(function (response) {
        dispatch(b(response.data.results));
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getRequest(options1, setTrendMovies);
    getRequest(options2, setTvShow);
    getRequest(disneyMovie, setDisneyMovie);
  }, []);
}

export default useApi;
