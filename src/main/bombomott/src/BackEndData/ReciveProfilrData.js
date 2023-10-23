import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

//로그인 -> userid(유저고유번호) 받아서 해당 유저의 프로필 정보 불러옴
export default function ReciveProfileData(userId) {
    const navigate = useNavigate()
    const [profileData, setProfileDate] = useState('');
    
    const CheckProfile = () => {
        axios
            .post("http://localhost:8080/login", {
            userid: userId
        })
            .then((res) => {
            setProfileDate(res.data)
        })
        .catch((error)=>{
            console.log(error)
        });
    };

    return {
        profileData
    }
}