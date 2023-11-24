import React, { useRef } from 'react';
import axios from 'axios';
import './css/login.css'
import CheckEmailLogic from '../BackEndData/CheckEmailLogic'
import notLoginCheck from '../notLoginCheck';

import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';


export default function EnterEmail() {
    const {userEmail, handleInputEmail, CheckEmail} = CheckEmailLogic()
    notLoginCheck();

    const handleSubmit = (event)=>{
        event.preventDefault(); // 기본 폼 제출 동작을 막음
        CheckEmail(); // CheckEmail 함수 실행
    }
    
    return (
        <div className="login-container">
            <div className="brand-logo">
                <img src='/img/bombom_logo.png'/>
            </div>
            <div className="login-box">
                <div className="login-title">
                    <p>1단계</p>
                    <h2>이메일을 입력하세요</h2>
                </div>
                <span><p>계정에 로그인하세요. 계정이 없는 경우 계정 생성을 위한 메시지가 표시됩니다.</p></span>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <span>
                            <input type="text" placeholder='이메일' value={userEmail} onChange={handleInputEmail} required/>
                            <div className='input-bottom'></div>
                        </span> 
                    </fieldset>
                    <div className="button-area">
                        <button type="submit">다음</button>
                    </div>
                </form>
            </div>
        </div>
    );
}