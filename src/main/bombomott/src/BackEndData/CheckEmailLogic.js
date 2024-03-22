import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

//로그인 시 이메일 전달
//회원테이블에 전달받은 이메일이 있는지 확인 -> 유무 여부 전달
//정보 받아서 이메일 있으면 비밀번호 입력화면으로, 없으면 비밀번호 생성화면으로
export default function CheckEmailLogic() {
    const navigate = useNavigate()
    const [userEmail, setUserEmail] = useState('');

    const handleInputEmail = (e)=>{
        setUserEmail(e.target.value);
    }
    
    useEffect(()=>{
        console.log(userEmail)
    },[userEmail])

    const CheckEmail = () => {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        if (userEmail.trim() === '') {
            alert('이메일을 입력해주세요.');
        } else if (!emailPattern.test(userEmail)) {
            alert('올바른 이메일 형식이 아닙니다.');
        } else {
            axios
                .post("http://localhost:8080/login/enter-email", {
                email: userEmail
            })
                .then((res) => {
                    console.log(res.data)
                    if(res.data.status == 1 ){ //이메일 있음
                        navigate('/login/enter-password', {state:{ email: userEmail} })
                    }else if(res.data.status == 0){ //이메일 없음
                        navigate('/login/create-password', {state:{ email: userEmail} }) //회원 가입 단계로
                    }else if(res.data.status == -10){
                        console.log('이미 로그인중') //다중 로그인 차단
                    }
            })
            .catch((error)=>{
                console.log(error)
            });
            // navigate('/login/create-password', {state:{ email: userEmail} })
            }
    };

    return {
        userEmail,
        handleInputEmail,
        CheckEmail
    }
}