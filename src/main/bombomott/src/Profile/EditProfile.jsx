import React from 'react';
import './css/selectProfile.css'
import EditProfileMain from './EditProfileMain';
import { useNavigate } from 'react-router-dom';

export default function EditProfile() {
    const navigate = useNavigate()

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
                        <EditProfileMain/>
                    </section>
                </div>
            </div>
        </div>
    );
}



