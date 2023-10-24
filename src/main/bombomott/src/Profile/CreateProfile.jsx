import React from 'react';
import './css/editProfile.css'
import borderStyle from '../borderStyle';

import { useEffect, useState } from "react";
export default function CreateProfile(){
    const [mouseIndex, setMouseIndex] = useState('');
    const [profileName, setProfileName] = useState(['내 프로필', '프로필2', '프로필3']);
    const [profileImg, setProfileImg] = useState(['https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png',
                                                    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png',
                                                    'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png'])
    const EDIT_IMG = 'https://static-assets.bamgrid.com/product/disneyplus/images/edit.0a8445c2cff0e80361b2e66906aaeca0.svg'
    
    const avatarImg = (i)=>{
        return{
            background : `url(${profileImg[i]}) 0% 0% / contain no-repeat`
        }
    }

    return(
        <div className="profile-box">
            {
                profileName.map((a,i)=>{
                    return(
                        <div className="profile-avatar" key={i}>
                            <div className="inner">
                                <div className="inner-img" 
                                    style={mouseIndex === i ? { ...avatarImg(i), ...borderStyle('box') } : avatarImg(i)}
                                    onMouseEnter={()=>{setMouseIndex(i)}} 
                                    onMouseLeave={()=>{setMouseIndex('')}}>
                                    <img src={`${EDIT_IMG}`} alt="" />
                                </div>
                                <h3>{profileName[i]}</h3>
                            </div>
                        </div>
                    )
                })
            }
            {
                profileImg.length < 4 ?
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