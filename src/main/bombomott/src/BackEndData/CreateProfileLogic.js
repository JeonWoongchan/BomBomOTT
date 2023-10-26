import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//유저의 고유id, 입력받은 프로필 정보 보냄
//받은 정보로 프로필 정보 추가
export default function CreateProfileLogic(image) {
    const navigate = useNavigate()
    const [profileName, setProfileName] = useState('')
    const userData = useSelector((state)=>state.userData)

    const handleInputProfileName = (e)=>{
        setProfileName(e.target.value);
    }

    const createProfile = () => {
        axios
            .post("http://localhost:8080/profile/add-profile", {
            id: userData,
            profile_name: profileName,
            profile_img: image
        })
            .then((res) => {
            console.log(res.data)
            if(res.data.status == 1){
                console.log('성공')
            }else{ 
                console.log('실패')
            }
        })
        .catch((error)=>{
            console.log(error)
        });
        console.log(image, profileName, userData)
    };

    return {
        profileName,
        handleInputProfileName,
        createProfile

    }
}