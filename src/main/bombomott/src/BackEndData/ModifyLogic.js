import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

//개인정보 수정 로직 : userId 받아서 해당 유저의 changeData를 userInput으로 바꿈
export default function CheckPwLogic(userId, changeData) {
    const navigate = useNavigate()
    const [userInput, setUserInput] = useState('');

    const handleInput = (e)=>{
        setUserInput(e.target.value);
    }

    const ModifyData = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     changedata: changeData, // ex) 이메일
        //     userinput: userInput // ex) bombom@naver.com
        //     //유저의 이메일을 bombom@naver.com로 수정
        // })
        //     .then((res) => {
        //     console.log(res.data.status)
        //     if(res.data.status == 1){ //비번 있음
        //         navigate('/regist-payment')
        //     }else if(res.data.status == -1){
        //         console.log('이미 로그인중')
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        // navigate(`/profile/account/regist-payment`)
        console.log(userId, changeData)
    };

    return {
        userInput,
        handleInput,
        ModifyData
    }
}