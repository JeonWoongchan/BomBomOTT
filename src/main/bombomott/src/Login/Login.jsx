import React from 'react';
import LoginMain from './LoginMain.jsx'
import Header from '../Header';
import Footer from '../Footer';
import ToTop from '../ToTop';
import './css/login.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    return (
        <div className='main-container'>
            <Header/>
            <LoginMain/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

