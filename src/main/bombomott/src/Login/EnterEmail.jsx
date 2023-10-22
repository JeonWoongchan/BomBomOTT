import React from 'react';
import axios from 'axios';
import './css/login.css'
import CheckEmailLogic from '../BackEndData/CheckEmailLogic'

import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';


export default function EnterEmail() {
    const navigate = useNavigate()  
    const {userId, handleInputId, CheckId} = CheckEmailLogic()
    
    return (
        <div className="login-container">
            <div className="brand-logo">
                <img src='/img/disney_Plus_logo.png'/>
            </div>
            <div className="login-box">
                <div className="login-title">
                    <p>1단계</p>
                    <h2>이메일을 입력하세요</h2>
                </div>
                <span><p>계정에 로그인하세요. 계정이 없는 경우 계정 생성을 위한 메시지가 표시됩니다.</p></span>
                <form action="">
                    <fieldset>
                        <span>
                            <input type="text" placeholder='이메일' value={userId} onChange={handleInputId} required/>
                            <div className='input-bottom'></div>
                        </span> 
                    </fieldset>
                    <div className="button-area">
                        <button type="button" onClick={CheckId}>다음</button>
                    </div>
                </form>
            </div>
        </div>
    );
}