import React from 'react';
import axios from 'axios';
import './css/firstContent.css'
import hotContentList from './hotContent.json'
import useApi from '../useApi';

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

export default function FirstContent() {
    const trendMovies = useSelector((state)=>state.trendMovies)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    return (
        <div className='hotContent'>
            <h1>인기 콘텐츠</h1>
            <div className="img-area">
            {
                trendMovies.slice(0, 9).map((a,i)=>{
                    return(
                        <img src={`${BASE_URL}${trendMovies[i].backdrop_path}`} key={i}/>
                    )
                })
            }
            </div>
        </div>
    );
}
