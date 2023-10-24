import React from 'react';
import './css/selectProfile.css'
import borderStyle from '../borderStyle';
import profileData from '../BackEndData/profileData.json'
import ReciveProfileData from '../BackEndData/ReciveProfilrData'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setNowProfile } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateProfile(){
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [mouseIndex, setMouseIndex] = useState('');
    const userData = useSelector((state)=>state.userData)
    // const {profileData} = ReciveProfileData(userData) //백엔드에서 받아온 프로필 데이터
    
    const avatarImg = (i)=>{
        return{
            background : `url(${profileData.profile[i].profileImg}) 0% 0% / contain no-repeat`
        }
    }

    return(
        <div className="profile-box">
            {
                profileData.profile.map((a,i)=>{
                    return(
                        <div className="profile-avatar" key={i}>
                            <div className="inner">
                                <div className="inner-img" 
                                    style={mouseIndex === i ? { ...avatarImg(i), ...borderStyle('box') } : avatarImg(i)}
                                    onMouseEnter={()=>{setMouseIndex(i)}} 
                                    onMouseLeave={()=>{setMouseIndex('')}}
                                    onClick={()=>{dispatch(setNowProfile(profileData.profile[i].profileCode));
                                                    navigate(`/main/${profileData.profile[i].profileCode}`)}}>
                                </div>
                                <h3>{profileData.profile[i].profileName}</h3>
                            </div>
                        </div>
                    )
                })
            }
            {
                profileData.profile.length < 4 ?
                <div className="profile-avatar addProfile" >
                    <div className="inner">
                        <div className="inner-img"
                            style={mouseIndex === 'addProfile' ? borderStyle('box') : null}
                            onMouseEnter={()=>{setMouseIndex('addProfile')}} 
                            onMouseLeave={()=>{setMouseIndex('')}}
                            onClick={()=>{navigate(`/profile/${userData}/null/add-profile`)}}>
                            <span className="material-symbols-outlined icon">add</span>
                        </div>
                        <h3 style={{color:'#acacac'}}>프로필 추가</h3>
                    </div>
                </div> : null   
            }
            
        </div>
    )
}