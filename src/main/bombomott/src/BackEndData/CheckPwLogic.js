import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CheckPwLogic() {
    const navigate = useNavigate()
    const [userPw, setUserPw] = useState('');
    const userId = useSelector((state)=>state.userData)

    const handleInputPw = (e)=>{
        setUserPw(e.target.value);
    }

    const CheckPw = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userpw: userPw
        // })
        //     .then((res) => {
        //     console.log(res.data.status)
        //     if(res.data.status == 1){ //비번 있음
        //         user테이블의 해당 유저의 고유 아이디 가져오는 코드 있어야됨 -> 로그인시 고유아이디를 url에 사용
        //         navigate('/regist-payment')
        //     }else if(res.data.status == -1){
        //         console.log('이미 로그인중')
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        navigate(`/main`)
    };

    return {
        userPw,
        handleInputPw,
        CheckPw
    }
}