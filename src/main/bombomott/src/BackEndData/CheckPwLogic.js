import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserData } from '../store/store';

//일이전화면에서 입력받은 이메일 넘겨받음, 비밀번호 새로 입력받아서 이메일과 비밀번호를 전달
//전달받은 이메일과 비밀번호로 로그인 정보 확인 -> 맞으면 로그인 가능 여부 보냄, 로그인 가능 시 유저의 고유id 보냄
//로그인 가능여부 받아서 맞으면 프로필 선택 페이지, 틀렸으면 알림, 로그인 후 고유id를 저장
export default function CheckPwLogic(email) {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [userPw, setUserPw] = useState('');
    const userData = useSelector((state)=>state.userData)

    const handleInputPw = (e)=>{
        setUserPw(e.target.value);
    }

    useEffect(()=>{
        if(userData != 'user1234'){
            navigate(`/login/select-profile`)
        }
    },[userData])

    const CheckPw = () => {
        if (userPw.trim() === '') {
            alert('비밀번호를 입력해주세요.');
        }else{
            axios
                .post("http://localhost:8080/login/enter-password", {
                email: email,
                password: userPw
            })
                .then((res) => {
                console.log(res.data)
                if(res.data.status == 1){ //비번 있음
                    //user테이블의 해당 유저의 고유 아이디 가져오는 코드 있어야됨 -> 로그인시 고유아이디를 url에 사용
                    dispatch(setUserData(res.data.id))//받아온 유저 고유번호를 저장
                    console.log(res.data)
                    localStorage.setItem('userId', res.data.id)
                    sessionStorage.setItem('userId', res.data.id)
                }else if(res.data.status == 0){
                    alert('비밀번호가 틀렸습니다');
                }
            })
            .catch((error)=>{
                console.log(error)
            });
            // console.log(email, userPw)
            // navigate(`/login/${userData}/select-profile`)
        }
    };

    return {
        userPw,
        handleInputPw,
        CheckPw
    }
}