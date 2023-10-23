import React from 'react';
import EnterEmail from './EnterEmail.jsx'
import EnterPw from './EnterPw.jsx'
import CreatePw from './CreatePw.jsx';
import EnterPay from './EnterPayment.jsx'
import SelectProfile from './SelectProfile.jsx';
import Footer from '../Footer'
import './css/login.css'

import { useEffect, useState } from "react";
import { setTrendMovies } from '../store/store';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

export default function Login() {
    const {loginStep} = useParams()
    return (
        <div className='main-container'>
            {
                loginStep == 'enter-email' ? <EnterEmail/> :
                loginStep == 'enter-password' ? <EnterPw/> :
                loginStep == 'create-password' ? <CreatePw/> : 
                loginStep == 'enter-payment' ? <EnterPay/> : 
                loginStep == 'select-profile' ? <SelectProfile/> : null
            }
            <Footer/>
        </div>
    );
}

