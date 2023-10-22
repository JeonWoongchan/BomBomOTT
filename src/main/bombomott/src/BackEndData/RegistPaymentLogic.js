import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function RegistPaymentLogic() {
    const navigate = useNavigate()
    const [userPay, setUserPay] = useState('');

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
        navigate('/main')
    };

    return {
        userPay,
        handleInputPay,
        CheckPay
    }
}