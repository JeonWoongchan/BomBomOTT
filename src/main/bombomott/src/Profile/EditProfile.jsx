import React from 'react';
import './css/editProfile.css'
import CreateProfile from './CreateProfile';
import { useNavigate } from 'react-router-dom';

export default function AddProfile() {
    const navigate = useNavigate()

    return (
        <div className='main-container'>
            <div className="edit-profile">
                <div className="header">
                    <img className='header-logo' src='/img/disney_Plus_logo.png'
                        onClick={()=>{navigate('/main')}}/>
                    <button type='submit'>완료</button>
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



