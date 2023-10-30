import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

//개인정보 수정 로직 : userId 받아서 해당 유저의 changeData를 userInput으로 바꿈
export default function ModifyPaymentLogic() {
    const [userInput, setUserInput] = useState('');
    const NewPay = sessionStorage.getItem('input');

    const handleInput = (e)=>{
        setUserInput(e.target.value);
    }

    const ModifyData = () => {
        axios
            .post("http://localhost:8080/profile/account/regist-payment", {
                payment : NewPay,
                password :  userInput
        })
            .then((res) => {
            console.log(res.data.status)
            if(res.data.status == 1){ //비번 있음
                console.log('성공')
            }else if(res.data.status == -1){
                console.log('이미 로그인중')
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