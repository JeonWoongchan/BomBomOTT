import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../store/store';

export default function CheckPwLogic(email) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userPw, setUserPw] = useState('');
    const userData = useSelector((state)=>state.userData)
    const [userCode, setUserCode] = useState('');

    const handleInputPw = (e)=>{
        setUserPw(e.target.value);
    }

    const CheckPw = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userid: email
        //     userpw: userPw
        // })
        //     .then((res) => {
        //     console.log(res.data.status)
        //     if(res.data.status == 1){ //비번 있음
        //         user테이블의 해당 유저의 고유 아이디 가져오는 코드 있어야됨 -> 로그인시 고유아이디를 url에 사용
        //         dispatch(setUSerDate(userCode))//받아온 유저 고유번호를 저장
        //         navigate('/regist-payment')
        //     }else if(res.data.status == -1){
        //         console.log('이미 로그인중')
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        navigate(`/login/${userData}/select-profile`)
    };

    return {
        userPw,
        handleInputPw,
        CheckPw
    }
}