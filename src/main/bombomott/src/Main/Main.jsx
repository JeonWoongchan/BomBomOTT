import React from 'react';
import axios from 'axios';
import Header from '../Header';
import Carousel from './Carousel';
import ButtonContainer from './ButtonContainer'
import MainContent from './MainContent';
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';
import isLoginCheck from '../isLoginCheck';
import './css/main.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Main() {
    const scroll = useScroll();
    const navigate = useNavigate()
    
    // 서버 세션에 로그인 id 없으면 메인 못오게 해야됨
    return (
        <div className='main-container'>
            <Header contentScroll={scroll}/>
            <Carousel/>
            <ButtonContainer/>
            <MainContent/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

