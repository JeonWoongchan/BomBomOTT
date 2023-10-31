import React from 'react';
import './css/editProfileInfo.css'
import './css/imageSelectModal.css'
import CreateProfileLogic from '../BackEndData/CreateProfileLogic';
import borderStyle from '../borderStyle';
import ProfileAvatar from '../ProfileAvatar';
import profileAvatarImg from '../profileAvatarImg.json'
import ModifyProfile from '../BackEndData/modifytProfile';
import DeleteProfile from '../BackEndData/deleteProfile';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setNowProfileData } from '../store/store';

export default function AddProfile() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const nowProfileId = localStorage.getItem('profileId')
    
    const { deleteProfile } = DeleteProfile(nowProfileId)

    return (
        <div className='main-container'>
            <div className="add-profile">
                <div className="header">
                    <img className='header-logo' src='/img/bombom_logo.png'
                        onClick={()=>{navigate(`/main`)}}/>
                </div>
                <div className="center">
                    <section className='center-main'>
                        <div className="main-box">
                            <section className="box-inner">
                                <div className="input-section">
                                    <div className="title">
                                        <h3>프로필을 삭제하시겠습니까?</h3>
                                    </div>
                                    <button type='button' className='delete' onClick={()=>{deleteProfile(); navigate('/login/select-profile')}}>삭제</button>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}


