import React from 'react';
import './css/selectProfile.css'
import SelectProfileMain from './SelectProfileMain';
import { useNavigate } from 'react-router-dom';

export default function SelectProfile() {
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
                        <h2>어느 프로필로 시청하시겠어요?</h2>
                        <SelectProfileMain/>
                    </section>
                </div>
            </div>
        </div>
    );
}



