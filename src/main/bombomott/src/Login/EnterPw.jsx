import React from 'react';
import axios from 'axios';
import './css/login.css'
import CheckPwLogic from '../BackEndData/CheckPwLogic'
import PasswordView from '../PasswordView'
import notLoginCheck from '../notLoginCheck';

import {useEffect, useState, useRef} from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export default function EnterPw() {
    notLoginCheck();
    const navigate = useNavigate()  
    const location = useLocation();
    const nextButtonRef = useRef(null);
    const email = location.state.email;
    
    const [inputView, setInputView] = useState(false); // 패스워드 view on/off
    const { inputIcon, inputType } = PasswordView(inputView);
    const {userPw, checked, handleInputPw, CheckPw} = CheckPwLogic(email)
    
    const handleSubmit = (event)=>{
        event.preventDefault(); // 기본 폼 제출 동작을 막음
        CheckPw(); // CheckEmail 함수 실행
    }

    const toggleinputView = () => {
        if(inputView){
            setInputView(false)
        }else{
            setInputView(true)
        }
    }
    
    return (
        <div className="login-container">
            <div className="brand-logo">
                <img src='/img/bombom_logo.png'/>
            </div>
            <div className="login-box">
                <div className="login-title">
                    <p>2단계</p>
                    <h2>비밀번호를 입력하세요</h2>
                </div>
                <span><p>계정에 로그인하세요. 로그인에 사용할 이메일 주소는 다음과 같습니다: bombom@naver.com </p></span>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <span>
                            <input type={inputType} placeholder='비밀번호' value={userPw} onChange={handleInputPw} required/>
                            <button type="button" className='view-control' onClick={()=>{toggleinputView()}}>
                                <span className="material-symbols-outlined icon">{inputIcon}</span>
                            </button>
                            <div className='input-bottom'>
                                <div className="text">(대소문자 구분)</div>
                            </div>
                        </span> 
                    </fieldset>
                    <div className="button-area">
                        <button type="submit">로그인</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
