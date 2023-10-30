import React from 'react';
import './header.css'
import profileData from './BackEndData/profileData.json'
import ReciveProfileData from './BackEndData/ReciveProfileData'

import {useEffect, useState} from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setNowProfile} from './store/store.js'

export default function ActiveProfile(props) {
    const navigate = useNavigate();

    const [profileOn, setProfileOn] = useState(false)
    const userId = useSelector((state)=>state.userData)
    const nowProfile = useSelector((state)=>state.nowProfile)

    const {reciveProfiles} = ReciveProfileData() //백엔드에서 받아온 프로필 데이터

    const nowProfileId = localStorage.getItem('profileId');
    const nowProfileName = localStorage.getItem('profileName');
    const nowProfileImg = localStorage.getItem('profileImg');

    const ActiveProfileList = Array.isArray(reciveProfiles) ? reciveProfiles.filter((e)=>e.profileId != nowProfileId) : [];
    
    const activeProfileStyle = (i) => {
        if(i == 0){
            return{
                height: profileOn == true ? `${200 + profileData.profile.length * 70}px` : '70px',
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
    
    const setLocalStorage = (a)=>{
        localStorage.setItem('profileId', a.profileId);
        localStorage.setItem('userId', a.id);
        localStorage.setItem('profileName', a.profileName);
        localStorage.setItem('profileImg', a.profileImg);
    }

    const removeLocalStorage = ()=>{
        localStorage.removeItem('profileId');
        localStorage.removeItem('userId');
        localStorage.removeItem('profileName');
        localStorage.removeItem('profileImg');
    }

    return (
        <div className="active-profile" 
            onMouseOver={()=>{setProfileOn(true)}} onMouseLeave={()=>{setProfileOn(false)}}
            style={activeProfileStyle(0)}>
            <div className="profile">
                <span>{nowProfileName}</span>
                <img className='header-logo' src={nowProfileImg}/>
            </div>
            <div className='hide-profile-menu' style={activeProfileStyle(1)}>
                <div className='profile-line'></div>
                {
                    Array.isArray(ActiveProfileList) ?
                    ActiveProfileList.map((a,i)=>{
                        return(
                            <div key={i}>
                                <div className='profile-menu' 
                                    onClick={()=>{ setLocalStorage(a); navigate(`/main`)}}>
                                    <div className="profile-img" style={{background : `url(${a.profileImg}) 0% 0% / contain no-repeat`}}></div>
                                    <h6>{a.profileName}</h6>
                                </div>
                            </div>
                        )
                    }) : null
                }
                {
                    reciveProfiles.length < 4  ?
                    <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/${nowProfile}/add-profile`)}}>
                        <span className="material-symbols-outlined icon">add_circle</span>
                        <h6>프로필 추가</h6>
                    </div> : null
                }
                <div className='profile-menu' onClick={()=>{ navigate(`/profile/edit-profiles`)}}>
                    <span>프로필 수정</span>
                </div>
                <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/${nowProfile}/account`)}}>
                    <span >계정</span>
                </div>
                <div className='profile-menu' onClick={()=>{ navigate(`/`); sessionStorage.removeItem('input'); removeLocalStorage()}}>
                    <span>로그아웃</span>
                </div>
            </div>  
        </div>
    );
}

