import React from 'react';
import './css/addProfile.css'
import CreateProfileLogic from '../BackEndData/CreateProfileLogic';
import borderStyle from '../borderStyle';

import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

export default function AddProfile() {
    const navigate = useNavigate()
    const [mouseIndex, setMouseIndex] = useState(false);
    const EDIT_IMG = 'https://static-assets.bamgrid.com/product/disneyplus/images/edit.0a8445c2cff0e80361b2e66906aaeca0.svg'
    const ImageUrl = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png'
    const {createProfile} = CreateProfileLogic(ImageUrl)

    const avatarImg = (i)=>{
        return{
            background : `url(${ImageUrl}) 0% 0% / contain no-repeat`
        }
    }

    return (
        <div className='main-container'>
            <div className="add-profile">
                <div className="header">
                    <img className='header-logo' src='/img/disney_Plus_logo.png'
                        onClick={()=>{navigate('/main')}}/>
                    <button type='submit'>완료</button>
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
                                    <input type="text" placeholder='프로필 이름'/>
                                    <div className="line"></div>
                                    <button type='button'>저장</button>
                                </div>
                                <div className="image-section">
                                    <div className="profile-avatar">
                                        <div className="inner">
                                            <div className="inner-img" 
                                                style={mouseIndex ? {...borderStyle('box') } : null}
                                                onMouseEnter={()=>{setMouseIndex(true)}} 
                                                onMouseLeave={()=>{setMouseIndex(false)}}>
                                                <img src={`${EDIT_IMG}`} alt="" />
                                            </div>
                                        </div>
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



