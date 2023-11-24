import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

//개인정보 수정 로직 : userId 받아서 해당 유저의 changeData를 userInput으로 바꿈
export default function ResetPasswordLogic() {
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState('');
    const NewPw = sessionStorage.getItem('input');

    const handleInput = (e)=>{
        setUserInput(e.target.value);
    }

    const ModifyData = () => {
        axios
            .post("http://localhost:8080/profile/account/reset-password", {
                newPassword : NewPw,
                password : userInput
        })
            .then((res) => {
            console.log(res.data.status)
            if(res.data.status == 1){ //비번 있음
                console.log('성공')
                navigate('/profile/account')
            }else if(res.data.status == -1){
                console.log(res)
            }
        })
        .catch((error)=>{
            console.log(error)
        });
        console.log(userInput, sessionStorage.getItem('input'))
    };

    return {
        userInput,
        handleInput,
        ModifyData
    }
}