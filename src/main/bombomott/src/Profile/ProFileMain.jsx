import React from 'react'
import Account from './Account'
import ChangeEmail from './SubMenu/ChangeEmail'
import ResetPassword from './SubMenu/ResetPassword'
import LogoutDevices from './SubMenu/LogoutDevices'
import ChangePayment from './SubMenu/RegistPayment'
import './css/profile.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function ProfileMain() {
    const location = useLocation();
    const {userId, profileMenu, profileSubMenu} = useParams()

    const createProfileContent = ()=>{
        if(profileMenu == 'account' && !profileSubMenu){
            return(<Account/>)
        }else if(profileMenu == 'account' && profileSubMenu == 'change-email'){
            return(<ChangeEmail/>)
        }else if(profileMenu == 'account' && profileSubMenu == 'reset-password'){
            return(<ResetPassword/>)
        }else if(profileMenu == 'account' && profileSubMenu == 'logout-devices'){
            return(<LogoutDevices/>)
        }else if(profileMenu == 'account' && profileSubMenu == 'regist-payment'){
            return(<ChangePayment/>)
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

