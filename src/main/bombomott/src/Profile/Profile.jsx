import React from 'react';
import ProfileMain from './ProFileMain'
import Header from '../Header';
import Footer from '../Footer';
import ToTop from '../ToTop';
import './css/profile.css'


import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Profile() {

    return (
        <div className='main-container'>
            <Header/>
            <ProfileMain/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

