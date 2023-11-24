import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../store/store';

//이전 이메일 입력화면에서 받아온 이메일과 방금 입력받은 비밀번호를 이용해서 회원등록
//회원 고유 아이디는 6자리 랜덤생성, 유저 고유id 보냄
//유저의 고유id저장, 계좌 입력 화면으로 이동
export default function CreateAccount(email) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userPw, setUserPw] = useState('');
    const userData = useSelector((state)=>state.userData)
    const { loginStep } = useParams()

    const handleInputPw = (e)=>{
        setUserPw(e.target.value);
    }

    useEffect(()=>{
        if(userData != 'user1234' && loginStep == 'create-password'){
            navigate(`/login/enter-payment`)
        }
    },[userData])

    const CreatePw = () => {
        if (userPw.trim() === '') {
            alert('비밀번호를 입력해주세요.');
        }else{
            axios
                .post("http://localhost:8080/login/create-password", {
                email: email,
                password: userPw
            })
                .then((res) => {
                console.log(res.data)
                if(res.data.status == 1){ // 비밀번호 등록 성공
                    //user테이블의 해당 유저의 고유 아이디 가져오는 코드 있어야됨 -> 로그인시 고유아이디를 url에 사용
                    dispatch(setUserData(res.data.id))//받아온 유저 고유번호를 저장
                    sessionStorage.setItem('userId', res.data.id)
                }else if(res.data.status == -1){ //회원가입 실패
                    console.log('error')
                }
            })
            .catch((error)=>{
                console.log(error)
            });
            // console.log(email, userPw)
            // navigate(`/login/${userData}/enter-payment`)
        }
    };

    return {
        userPw,
        handleInputPw,
        CreatePw
    }
}