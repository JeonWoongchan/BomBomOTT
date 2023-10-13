import React from 'react';
import axios from 'axios';
import Header from '../Header';
import Carousel from './Carousel';
import ButtonContainer from './ButtonContainer'
import MainContent from './MainContent';
import Footer from '../Footer';
import ToTop from '../ToTop';
import './css/main.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useSelector, useDispatch } from 'react-redux';

export default function Main() {
    return (
        <div className='main-container'>
            <Header/>
            <Carousel/>
            <ButtonContainer/>
            <MainContent/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

