import React from 'react';
import './css/selectProfile.css'
import borderStyle from '../borderStyle';
import profileData from '../BackEndData/profileData.json'
import ReciveProfileData from '../BackEndData/ReciveProfileData'

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { setNowProfile } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditProfileMain(){
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const EDIT_IMG = 'https://static-assets.bamgrid.com/product/disneyplus/images/edit.0a8445c2cff0e80361b2e66906aaeca0.svg'

    const userData = useSelector((state)=>state.userData)
    const [mouseIndex, setMouseIndex] = useState('');
    const {reciveProfiles} = ReciveProfileData() //백엔드에서 받아온 프로필 데이터
    
    const avatarImg = (i)=>{
        return{
            background : `url(${reciveProfiles[i].profileImg}) 0% 0% / contain no-repeat`
        }
    }

    const setLocalStorage = (a)=>{
        localStorage.setItem('profileId', a.profileId);
        localStorage.setItem('userId', a.id);
        localStorage.setItem('profileName', a.profileName);
        localStorage.setItem('profileImg', a.profileImg);
    }

    return(
        <div className="profile-box">
            {
                Array.isArray(reciveProfiles) ?
                reciveProfiles.map((a,i)=>{
                    return(
                        <div className="profile-avatar" key={i}>
                            <div className="inner">
                                <div className="inner-img" 
                                    style={mouseIndex === i ? { ...avatarImg(i), ...borderStyle('box') } : avatarImg(i)}
                                    onMouseEnter={()=>{setMouseIndex(i)}} 
                                    onMouseLeave={()=>{setMouseIndex('')}}
                                    onClick={()=>{setLocalStorage(a); navigate(`/profile/edit-profileInfo`)}}>
                                    <img src={`${EDIT_IMG}`} alt="" />
                                </div>
                                <h3>{reciveProfiles[i].profileName}</h3>
                            </div>
                        </div>
                    )
                }) : null
            }
            {
                reciveProfiles.length < 4 ?
                <div className="profile-avatar addProfile" >
                    <div className="inner">
                        <div className="inner-img"
                            style={mouseIndex === 'addProfile' ? borderStyle('box') : null}
                            onMouseEnter={()=>{setMouseIndex('addProfile')}} 
                            onMouseLeave={()=>{setMouseIndex('')}}
                            onClick={()=>{navigate(`/profile/add-profile`)}}>
                            <span className="material-symbols-outlined icon">add</span>
                        </div>
                        <h3 style={{color:'#acacac'}}>프로필 추가</h3>
                    </div>
                </div> :null
            }
            
        </div>
    )
}