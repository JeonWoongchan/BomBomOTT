import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//로그인 -> userid(유저고유번호) 받아서 해당 유저의 프로필 정보 불러옴
//받아올 프로필 정보: 프로필명, 프로필아이디, 프로필 이미지, 프로필 시청기록, 프로필 관심콘텐츠
export default function ReciveProfileData() {
    const navigate = useNavigate()
    const [reciveProfiles, setReciveProfiles] = useState([]);

    useEffect(()=>{
        axios
            .post("http://localhost:8080/login/select-profile", {
        })
            .then((res) => {
            console.log(res.data)
            const reversedProfiles = res.data.profiles.slice().reverse();
            setReciveProfiles(reversedProfiles)
        })
        .catch((error)=>{
            console.log(error)
        });
    },[])
    

    return {
        reciveProfiles
    }
}