import React from 'react';
import ProfileMain from './ProFileMain'
import EditProfile from './EditProfile'
import Header from '../Header';
import Footer from '../Footer';
import ToTop from '../ToTop';
import './css/profile.css'


import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Profile() {
    const {profileMenu} = useParams()
    return (
        <div className='main-container'>
            {profileMenu == 'edit-profiles' ?
            <EditProfile/> 
            :<>
                <Header/>
                <ProfileMain/>
                <Footer/>
                <ToTop/>
            </> 
            }
        </div>
    );
}

