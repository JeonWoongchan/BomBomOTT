import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

//이전 이메일 입력화면에서 받아온 이메일과 방금 입력받은 비밀번호를 이용해서 회원등록
//회원 고유 아이디는 6자리 랜덤생성
export default function CreateAccount(email) {
    const navigate = useNavigate()
    const [userPw, setUserPw] = useState('');
    const userId = useSelector((state)=>state.userData)

    const handleInputPw = (e)=>{
        setUserPw(e.target.value);
    }

    const CreatePw = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userid: email,
        //     userpw: userPw
        // })
        //     .then((res) => {
        //     console.log(res.data.status)
        //     if(res.data.status == 1){ // 비밀번호 등록 성공
        //         navigate('/main')
        //     }else if(res.data.status == -1){ //회원가입 실패
        //         console.log('')
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        console.log(email, userPw)
        navigate(`/login/enter-payment`)
    };

    return {
        userPw,
        handleInputPw,
        CreatePw
    }
}