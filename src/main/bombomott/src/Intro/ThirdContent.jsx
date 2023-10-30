import React from 'react';
import './css/firstContent.css'
import hotContentList from './hotContent.json'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';

export default function ThirdContent() {
    const tvShow = useSelector((state) => state.tvShow)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    return (
        <div className='hotContent'>
            <h1>TV 프로그램</h1>
            <div className="img-area">
            {
                tvShow.slice(0, 9).map((a,i)=>{
                    return(
                        <img src={`${BASE_URL}${tvShow[i].backdrop_path}`} key={i}/>
                    )
                })
            }
            </div>
        </div>
    );
}
