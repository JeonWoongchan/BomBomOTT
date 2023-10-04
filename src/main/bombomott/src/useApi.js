import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTrendMovies, setTvShow } from './store/store';
import axios from "axios";

function useApi() {
    let dispatch = useDispatch();

    const options1 = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
        }
    };

    const options2 = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
        }
    };

    const getRequest = (a,b) => {
        axios.request(a).then(function (response) {
            dispatch(b(response.data.results))
        }).catch(function (error) {
            console.error(error);
        });
    }
    
    useEffect(()=>{
        getRequest(options1, setTrendMovies)
        getRequest(options2, setTvShow)
    },[])

}

export default useApi;