import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGenreMovie, addGenreMovie } from './store/store';
import axios from "axios";

// api 받아오는 함수
function GenreApi(media, genre, page) {
    const dispatch = useDispatch();

    useEffect(()=>{
        const GenreMovieData = {
            method: 'GET',
            url: genre == 'recommend' ? `https://api.themoviedb.org/3/trending/${media}/week?language=ko-KR` // trendMovie week
                : genre == 'all' ? `https://api.themoviedb.org/3/discover/${media}?include_adult=false&include_video=false&language=ko-KR&page=${page}&sort_by=popularity.desc`
                : `https://api.themoviedb.org/3/discover/${media}?include_adult=false&include_video=false&language=ko-KR&page=${page}&sort_by=popularity.desc&with_genres=${genre}`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };
        const getRequest = (a, b) => {
            axios.request(a)
                .then(function (response) {
                    dispatch(b(response.data.results));
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        if (page === 1) {
            getRequest(GenreMovieData, setGenreMovie);
        } else if (page > 1) {
            getRequest(GenreMovieData, addGenreMovie);
        }
    },[media, genre, page])


    return null;
}

export default GenreApi;