import React from 'react';
import ProfileMain from './ProFileMain'
import EditProfile from './EditProfile'
import AddProfile from './AddProfile'
import EditProfileInfo from './EditProfileInfo'
import DeleteProfileInfo from './DeleteProfileInfo'
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
            : profileMenu == 'add-profile' ?
            <AddProfile/>
            : profileMenu == 'edit-profileInfo' ?
            <EditProfileInfo/>
            : profileMenu == 'delete-profileInfo' ?
            <DeleteProfileInfo/>
            : <>
                <Header/>
                <ProfileMain/>
                <Footer/>
                <ToTop/>
            </> 
            }
        </div>
    );
}

