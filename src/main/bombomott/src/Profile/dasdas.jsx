import React from 'react';
import './css/editProfile.css'
import CreateProfile from './CreateProfile';
import { useNavigate } from 'react-router-dom';
import { setNowProfile } from '../store/store';
import { useSelector } from 'react-redux';
import { useEffect, useState } from "react";

export default function AddProfile() {
    const navigate = useNavigate()
    const nowProfile = useSelector((state)=>state.nowProfile)

    return (
        <div className='main-container'>
            <div className="edit-profile">
                <div className="header">
                    <img className='header-logo' src='/img/bombom_logo.png'
                        onClick={()=>{navigate('/main')}}/>
                </div>
                <div className="center">
                    <section className='center-main'>
                        <h2>프로필 수정</h2>
                        <h4>수정할 프로필을 선택하세요</h4>
                        <CreateProfile/>
                    </section>
                </div>
            </div>
        </div>
    );
}



