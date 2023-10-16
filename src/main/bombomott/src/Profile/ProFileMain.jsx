import React from 'react';
import Account from './Account';
import './css/profile.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileMain() {
    const location = useLocation();
    const {userId, profileMenu} = useParams()

    const createProfileContent = ()=>{
        if(profileMenu == 'account'){
            return(<Account/>)
        }
    }

    return (
        <div id='profileMain'>
            <div className="profile-background"></div>
            <main className="profile-content">
                <div className="content-box">
                    {createProfileContent()}
                </div>
            </main>
        </div>
    );
}

