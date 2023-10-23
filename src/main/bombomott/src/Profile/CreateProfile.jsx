import React from 'react';
import './css/editProfile.css'
import borderStyle from '../borderStyle';
import profileData from '../BackEndData/profileData.json'

import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setNowProfile } from '../store/store';

export default function CreateProfile(){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [mouseIndex, setMouseIndex] = useState('');
    const EDIT_IMG = 'https://static-assets.bamgrid.com/product/disneyplus/images/edit.0a8445c2cff0e80361b2e66906aaeca0.svg'
    
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
                                    onMouseLeave={()=>{setMouseIndex('')}}>
                                    <img src={`${EDIT_IMG}`} alt="" />
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
                        </div>
                        <h3 style={{color:'#acacac'}}>프로필 추가</h3>
                    </div>
                </div> : null   
            }
            
        </div>
    )
}