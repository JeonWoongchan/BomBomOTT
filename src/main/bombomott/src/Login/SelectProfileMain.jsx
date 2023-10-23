import React from 'react';
import './css/selectProfile.css'
import borderStyle from '../borderStyle';
import profileData from '../BackEndData/profileData.json'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setNowProfile } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';

export default function CreateProfile(){
    const nowProfile = useSelector((state)=>state.nowProfile)
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [mouseIndex, setMouseIndex] = useState('');
    
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
                                    onClick={()=>{dispatch(setNowProfile(profileData.profile[i].profileName));
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
                            onMouseLeave={()=>{setMouseIndex('')}}>
                            <span className="material-symbols-outlined icon">add</span>
                            <img src="https://static-assets.bamgrid.com/product/disneyplus/images/edit.0a8445c2cff0e80361b2e66906aaeca0.svg" alt="" />
                        </div>
                        <h3 style={{color:'#acacac'}}>프로필 추가</h3>
                    </div>
                </div> : null   
            }
            
        </div>
    )
}