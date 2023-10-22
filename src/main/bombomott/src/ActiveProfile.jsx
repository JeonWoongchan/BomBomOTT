import React from 'react';
import './header.css'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setNowProfile} from './store/store.js'

export default function ActiveProfile(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [profileOn, setProfileOn] = useState(false);
    const userId = useSelector((state)=>state.userData)
    const nowProfile = useSelector((state)=>state.nowProfile)
    
    const [profileName, setProfileName] = useState(['프로필1', '프로필2', '프로필3']);
    const [profileImg, setProfileImg] = useState(['https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png',
    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png'])

    const activeProfileStyle = (i) => {
        if(i == 0){
            return{
                height: profileOn == true ? `${340 +profileName.length * 70}px` : '70px',
                backgroundColor: props.contentScroll > 5 ? 'transparent' : null,
                backgroundColor: profileOn == true ? 'rgb(19, 19, 19)' : null,
                outline : profileOn == true ? '0.5px solid #acacac' : 'none',
                transition: 'all 0.2s',
            }
        }else if(i == 1){//hide-profile style
            return{
                opacity: profileOn == true ? 1 : 0, 
                display: profileOn == true ? 'block' : 'none', 
                transition: 'opacity 0.2s', 
            }
        }
    }

    useEffect(()=>{
        console.log(nowProfile)
    },[nowProfile])

    return (
        <div className="active-profile" 
            onMouseOver={()=>{setProfileOn(true)}} onMouseLeave={()=>{setProfileOn(false)}}
            style={activeProfileStyle(0)}>
            <div className="profile">
                <span>{nowProfile}</span>
                <img className='header-logo' src='/img/icon-woman.png'/>
            </div>
            <div className='hide-profile-menu' style={activeProfileStyle(1)}>
                <div className='profile-line'></div>
                {
                    profileName.map((a,i)=>{
                        return(
                            <div className='profile-menu' onClick={()=>{dispatch(setNowProfile(profileName[i]))}} key={i}>
                                <div className="profile-img" style={{background : `url(${profileImg[i]}) 0% 0% / contain no-repeat`}}></div>
                                <h6>{profileName[i]}</h6>
                            </div>
                        )
                    })
                }
                {
                    profileName.length < 7  ?
                    <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/select-avatar`)}}>
                        <span className="material-symbols-outlined icon">add_circle</span>
                        <h6>프로필 추가</h6>
                    </div> : null
                }
                <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/edit-profiles`)}}>
                    <span>프로필 수정</span>
                </div>
                <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/account`)}}>
                    <span >계정</span>
                </div>
                <div className='profile-menu' onClick={()=>{ navigate(`/help`)}}>
                    <span>고객센터</span>
                </div>
                <div className='profile-menu' onClick={()=>{ navigate(``)}}>
                    <span>로그아웃</span>
                </div>
            </div>  
        </div>
    );
}

