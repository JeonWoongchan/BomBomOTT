import React from 'react';
import './header.css'
import profileData from './BackEndData/profileData.json'

import {useEffect, useState} from "react";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {setNowProfile} from './store/store.js'

export default function ActiveProfile(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch()

    const [profileOn, setProfileOn] = useState(false)
    const userId = useSelector((state)=>state.userData)
    const nowProfile = useSelector((state)=>state.nowProfile)
    const {nowProfileCode} = useParams()
    const [findProfile, setFindProfile] = useState('')
    
    const activeProfileStyle = (i) => {
        if(i == 0){
            return{
                height: profileOn == true ? `${250 +profileData.profile.length * 70}px` : '70px',
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
        if(profileData.profile.length > 0){
            setFindProfile(profileData.profile.find(profile => profile.profileCode === nowProfileCode).profileName)
        }
    },[nowProfile, profileData])

    return (
        <div className="active-profile" 
            onMouseOver={()=>{setProfileOn(true)}} onMouseLeave={()=>{setProfileOn(false)}}
            style={activeProfileStyle(0)}>
            <div className="profile">
                <span>{findProfile}</span>
                <img className='header-logo' src='/img/icon-woman.png'/>
            </div>
            <div className='hide-profile-menu' style={activeProfileStyle(1)}>
                <div className='profile-line'></div>
                {
                    profileData.profile.map((a,i)=>{
                        
                        return(
                            <div key={i}>
                            {nowProfileCode != a.profileCode ?
                                <div className='profile-menu' 
                                    onClick={()=>{dispatch(setNowProfile(a.profileCode)); console.log(nowProfile);
                                    navigate(`/main/${a.profileCode}`)}}>
                                    <div className="profile-img" style={{background : `url(${a.profileImg}) 0% 0% / contain no-repeat`}}></div>
                                    <h6>{a.profileName}</h6>
                                </div> : null
                            }
                            </div>
                        )
                    })
                }
                {
                    profileData.profile.length < 7  ?
                    <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/${nowProfile}/add-profile`)}}>
                        <span className="material-symbols-outlined icon">add_circle</span>
                        <h6>프로필 추가</h6>
                    </div> : null
                }
                <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/${nowProfile}/edit-profiles`)}}>
                    <span>프로필 수정</span>
                </div>
                <div className='profile-menu' onClick={()=>{ navigate(`/profile/${userId}/${nowProfile}/account`)}}>
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

