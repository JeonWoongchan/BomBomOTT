import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

//이전화면에서 받은 유저id와 입력받은 계좌번호 보냄
//유저id에 맞는 유저의 계좌번호 등록
//등록 성공 시 프로필 선택화면으로 이동
export default function RegistPaymentLogic() {
    const navigate = useNavigate()
    const [userPay, setUserPay] = useState('');
    const userData = useSelector((state)=>state.userData)

    const handleInputPay = (e)=>{
        setUserPay(e.target.value);
    }

    const CheckPay = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userPay: userPay
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
        console.log(userPay)
        navigate(`/login/${userData}/select-profile`)
    };

    return {
        userPay,
        handleInputPay,
        CheckPay
    }
}