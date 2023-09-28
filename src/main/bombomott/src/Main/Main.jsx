import React from 'react';
import axios from 'axios';
import Header from './Header';
import './css/main.css'

import { MovieCard } from './MovieCard';
import {useEffect, useState} from "react";
import { setTrendMovies } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {

    const trendMovies = useSelector((state) => state.trendMovies)
    let dispatch = useDispatch();

    const options = { // 가져올 api 주소
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
        }
    };
    
    useEffect(()=>{ // api 데이터 받아옴
        axios.request(options).then(function (response) {
            dispatch(setTrendMovies(response.data.results))
        }).catch(function (error) {
            console.error(error);
        });
    },[])

    return (
        <div className='container'>
            <Header/>
        </div>
    );
}

