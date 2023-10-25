import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

// 콘텐츠 재생시 최근본콘텐츠로 데이터 전송
export default function PostViewData(userId) {
    const navigate = useNavigate()
    const [profileData, setProfileDate] = useState('');
    
    const PostViewData = () => {
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
        PostViewData
    }
}