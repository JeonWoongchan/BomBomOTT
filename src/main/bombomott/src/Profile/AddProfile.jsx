import React from 'react';
import './css/addProfile.css'
import CreateProfileLogic from '../BackEndData/CreateProfileLogic';
import ProfileAvatar from '../ProfileAvatar';
import profileAvatarImg from '../profileAvatarImg.json'

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';

export default function AddProfile() {
    const navigate = useNavigate()  

    const [modal, setModal] = useState(false)
    const [editImage, setEditImage] = useState(profileAvatarImg.image[0].url) // 프로필 생성 시 최초 이미지

    const {profileName, handleInputProfileName, createProfile} = CreateProfileLogic(editImage)

    return (
        <div className='main-container'>
            {modal ?
                <div className="image-select-container">
                    <div className="select-modal">
                        <h3>아이콘 선택</h3>
                        <div className="modal-inner">
                            {profileAvatarImg.image.map((a,i)=>{
                                return(
                                    <div key={i}>
                                        <ProfileAvatar imgUrl={a.url} editImage={editImage} setEditImage={setEditImage} setModal={setModal}/>
                                    </div> 
                            )})}
                        </div>
                    </div>
                </div> : null
            }
            <div className="add-profile">
                <div className="header">
                    <img className='header-logo' src='/img/bombom_logo.png'
                        onClick={()=>{navigate('/main')}}/>
                </div>
                <div className="center">
                    <section className='center-main'>
                        <div className="main-box">
                            <section className="box-inner">
                                <div className="input-section">
                                    <div className="title">
                                        <h3>프로필 추가</h3>
                                    </div>
                                    <p>프로필 이름</p>
                                    <input type="text" placeholder='프로필 이름' value={profileName} onChange={handleInputProfileName} required/>
                                    <div className="line"></div>
                                    <button type='button' onClick={()=>{createProfile(); navigate('/login/select-profile')}}>저장</button>
                                </div>
                                <div className="image-section">
                                    <div onClick={()=>{setModal(true)}}>
                                        <ProfileAvatar imgUrl={editImage}/>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}



