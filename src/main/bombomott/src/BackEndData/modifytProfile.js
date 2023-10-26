import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

// 콘텐츠 재생시 최근본콘텐츠로 데이터 전송
export default function ModifyProfile(profileImg, userData) {
    const navigate = useNavigate()
    const [profileName, setProfileName] = useState('');

    const handleInputProfileName = (e)=>{
        setProfileName(e.target.value);
    }

    const modifyProfile = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userid: userId
        // })
        //     .then((res) => {
        //     setProfileDate(res.data)
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        console.log(profileName, profileImg, userData)
    };

    return {
        profileName,
        handleInputProfileName,
        modifyProfile
    }
}