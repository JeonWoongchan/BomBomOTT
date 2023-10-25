import React from 'react';
import borderStyle from './borderStyle';
import './profileAvatar.css'
import profileAvatarImg from './profileAvatarImg.json'
import { useEffect, useState } from "react";

export default function ProfileAvatar(props) {
    const [mouseIndex, setMouseIndex] = useState(false)
    // const ImageUrl = 'https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/BD2FA0F3965617FC515E3CEBD3AD51C00CCFFBF98F96448EFE46B82867FCE542/scale?width=280&aspectRatio=1.00&format=png'

    const avatarImg = ()=>{
        return{
            background : `url(${props.imgUrl}) 0% 0% / contain no-repeat`
        }
    }

    const modifyImage = ()=>{
        if (props.editImage) {
            props.setEditImage(props.imgUrl);
            props.setModal(false);
        }
    }

    return (
        <div className="profile-avatar">
            <div className="inner">
                <div className="inner-img" onClick={()=>{modifyImage()}}
                    style={mouseIndex ? {...borderStyle('box'), ...avatarImg() } : avatarImg()}
                    onMouseEnter={()=>{setMouseIndex(true)}} 
                    onMouseLeave={()=>{setMouseIndex(false)}}>
                </div>
            </div>
        </div>
    );
}

