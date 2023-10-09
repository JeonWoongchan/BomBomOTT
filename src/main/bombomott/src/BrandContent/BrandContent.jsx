import React from 'react';
import axios from 'axios';
import Header from '../Header';
import BrandMain from './BrandMain';
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';
import './css/brandContent.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function BrandContent(props) {
    const scroll = useScroll();  
    const location = useLocation();
    const receivedData = location.state.data;
    const isLoading = useSelector((state)=>state.isLoading)
    
    return (
        isLoading == true ? <h1>로딩중...</h1> :
        <div className='main-container'>
            <Header contentScroll={scroll}/>
            <BrandMain BrandData={receivedData}/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

