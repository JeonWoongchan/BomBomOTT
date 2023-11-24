import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';

//로그인 안되어있어야 접속 가능
export default function NotLoginCheck() {
    const navigate = useNavigate(); 

    useEffect(()=>{
        if(localStorage.getItem('userId') !== null){
            navigate('/main')
        }  
    },[])
}
