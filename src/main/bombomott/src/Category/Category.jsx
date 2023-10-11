import React from 'react';
import axios from 'axios';
import Header from '../Header';
import CategoryMain from './CategoryMain'
import Footer from '../Footer';
import ToTop from '../ToTop';
import './css/category.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Category() {
    const location = useLocation();
    return (
        <div className='main-container'>
            <Header/>
            <CategoryMain/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

