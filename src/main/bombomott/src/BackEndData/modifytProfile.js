import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

// 콘텐츠 재생시 최근본콘텐츠로 데이터 전송
export default function ModifyProfile(image, profileId) {
    const navigate = useNavigate()
    const [profileName, setProfileName] = useState('');

    const handleInputProfileName = (e)=>{
        setProfileName(e.target.value);
    }

    useEffect(()=>{
        console.log(profileId)
    },[])

    const modifyProfile = () => {
        axios
            .post("http://localhost:8080/profile/edit-profileInfo", {
            profileId : profileId,
            profileName: profileName,
            profileImg: image
        })
            .then((res) => {
                console.log(res.data)
            if(res.data.status == 1){
                console.log('성공')
                window.location.reload();
            }else{ 
                console.log('실패')
            }
            
        })
        .catch((error)=>{
            console.log(error)
        });
    };

    return {
        profileName,
        handleInputProfileName,
        modifyProfile
    }
}