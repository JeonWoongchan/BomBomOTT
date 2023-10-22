import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

export default function CheckEmailLogic() {
    const navigate = useNavigate()
    const [userId, setUserId] = useState('');

    const handleInputId = (e)=>{
        setUserId(e.target.value);
    }
    
    const CheckId = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userid: userId
        // })
        //     .then((res) => {
        //     console.log(res.data.status)
            
        //     if(res.data.status == 1 ){ //이메일 있음
        //         navigate('/login/enter-password')
        //     }else if(res.data.status == 0){ //이메일 없음
        //         navigate('/login/create-password', {state:{ email: userId} }) //회원 가입 단계로
        //     }else if(res.data.status == -1){
        //         console.log('이미 로그인중') //다중 로그인 차단
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        navigate('/login/create-password', {state:{ email: userId} })
    };

    return {
        userId,
        handleInputId,
        CheckId
    }
}