import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function CreateProfileLogic(image) {
    const navigate = useNavigate()
    const userData = useSelector((state)=>state.userData)

    const createProfile = () => {
        // axios
        //     .post("http://localhost:8080/login", {
        //     userid: userData,
        //     profileImg: image
        // })
        //     .then((res) => {
        //     console.log(res.data.status)
        //     if(res.data.status == 1){ // 비밀번호 등록 성공
        //         user테이블의 해당 유저의 고유 아이디 가져오는 코드 있어야됨 -> 로그인시 고유아이디를 url에 사용
        //         dispatch(setUSerDate(userCode))//받아온 유저 고유번호를 저장
        //     }else if(res.data.status == -1){ //회원가입 실패
        //         console.log('')
        //     }
        // })
        // .catch((error)=>{
        //     console.log(error)
        // });
        navigate(`/login/${userData}/select-profile`)
    };

    return {
        createProfile
    }
}