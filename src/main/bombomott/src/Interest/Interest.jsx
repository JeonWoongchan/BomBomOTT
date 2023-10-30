import React from 'react';
import axios from 'axios';
import Header from '../Header';
import InterestMain from './InterestMain'
import Footer from '../Footer';
import ToTop from '../ToTop';
import './css/interest.css'
import useScroll from '../useScroll';

import { useEffect, useState } from "react";
import { setTrendMovies } from "../store/store";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function Interest() {

    const scroll = useScroll();

    return (
        <div className='main-container'>
            <Header contentScroll={scroll}/>
            <InterestMain/>
            <Footer/>
            <ToTop/>
        </div>
    );
}
