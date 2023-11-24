import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

// 콘텐츠 재생시 최근본콘텐츠로 데이터 전송
export default function LogoutProfile() {
    const navigate = useNavigate()
    const logout = () => {
        axios
            .post("http://localhost:8080/logout", {
        })
            .then((res) => {
                console.log(res.data)
            if(res.data.status == 1){
                console.log('성공')
                alert('로그아웃 되었습니다.')
                navigate('/')
                sessionStorage.clear(); 
                localStorage.clear(); 
            }else{ 
                console.log('실패')
            }
            
        })
        .catch((error)=>{
        });
    };

    return {
        logout
    }
}