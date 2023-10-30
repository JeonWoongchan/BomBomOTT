import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../store/store';

//이전화면에서 받은 유저id와 입력받은 계좌번호 보냄
//유저id에 맞는 유저의 계좌번호 등록
//등록 성공 시 프로필 선택화면으로 이동
export default function RegistPaymentLogic() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [userPay, setUserPay] = useState('');
    const userData = useSelector((state)=>state.userData)
    const { loginStep } = useParams()

    const handleInputPay = (e)=>{
        setUserPay(e.target.value);
    }

    // useEffect(()=>{
    //     if(userData != 'user1234' && loginStep == 'enter-payment'){
    //         navigate(`/login/${userData}/select-profile`)
    //     }
    // },[userData])

    const CheckPay = () => {
        if (userPay.trim() === '') {
            alert('계좌번호를 입력해주세요.');
        }else{
            axios
                .post("http://localhost:8080/login/enter-payment", {
                payment: userPay
            })
                .then((res) => {
                console.log(res.data.status)
                if(res.data.status == 1){ // 계좌 등록 성공
                    navigate(`/login/select-profile`)
                    console.log('성공')
                }else if(res.data.status == -1){ //회원가입 실패
                    console.log('')
                }
            })
            .catch((error)=>{
                console.log(error)
            });
        }
    };

    return {
        userPay,
        handleInputPay,
        CheckPay
    }
}