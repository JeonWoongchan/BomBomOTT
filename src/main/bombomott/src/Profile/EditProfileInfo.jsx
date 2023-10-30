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

    const [editImage, setEditImage] = useState(localStorage.getItem('profileImg'))
    const [modal, setModal] = useState(false)
    const nowProfileId = localStorage.getItem('profileId')
    
    const { profileName, handleInputProfileName, modifyProfile } = ModifyProfile(editImage, nowProfileId)
    const { deleteProfile } = DeleteProfile(nowProfileId)

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
                        onClick={()=>{navigate(`/main`)}}/>
                </div>
                <div className="center">
                    <section className='center-main'>
                        <div className="main-box">
                            <section className="box-inner">
                                <div className="input-section">
                                    <div className="title">
                                        <h3>프로필 수정</h3>
                                    </div>
                                    <p>프로필 이름</p>
                                    <input type="text" placeholder='프로필 이름' value={profileName} onChange={handleInputProfileName}/>
                                    <div className="line"></div>
                                    <button type='button' className='save' onClick={()=>{modifyProfile('modify'); navigate('/login/select-profile')}}>저장</button>
                                    <button type='button' className='delete' onClick={()=>{navigate('/profile/delete-profileInfo')}}>삭제</button>
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


