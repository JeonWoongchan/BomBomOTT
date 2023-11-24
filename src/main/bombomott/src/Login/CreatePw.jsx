import React from 'react';
import axios from 'axios';
import './css/login.css'
import CreateAccount from '../BackEndData/CreateAccount'
import PasswordView from '../PasswordView'
import PasswordSafeLevel from '../PasswordSafeLevel'
import notLoginCheck from '../notLoginCheck';

import {useEffect, useState, useRef}  from "react";
import { useLocation, useNavigate } from 'react-router-dom';


export default function CreatePw(props) {
    notLoginCheck();
    const navigate = useNavigate()  
    const location = useLocation();
    const nextButtonRef = useRef(null);
    const email = location.state.email;

    const [inputValue, setInputValue] = useState(''); //input창 텍스트
    const [inputView, setInputView] = useState(false); // 패스워드 view on/off
    const [checkOn, setCheckOn] = useState(false); // checkbox on/off

    const { inputIcon, inputType } = PasswordView(inputView);
    const { userPw, handleInputPw, CreatePw } = CreateAccount(email)
    const { safeLevel, progressText, progressColor} = PasswordSafeLevel(inputValue)
    
    const toggleCheckOn = () => {
        if(checkOn){
            setCheckOn(false)
        }else{
            setCheckOn(true)
        }
    }
    
    const toggleinputView = () => {
        if(inputView){
            setInputView(false)
        }else{
            setInputView(true)
        }
    }

    const inputValueHandler = (e)=>{
        setInputValue(e.target.value)
    }

    const progressStyle = ()=>{
        return{
            display: inputValue.length > 0 ? 'flex ' : 'none',
            transition : 'all 0.2s'
        }
    }
    
    const buttonStyle = ()=>{
        return{
            cursor: safeLevel > 2 ? 'pointer' : 'default',
            background: safeLevel > 2 ? '#0072d2' : '#acacac'
        }
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          // If Enter key is pressed, click the "다음" button
            nextButtonRef.current.click();
        }
    };

    const handleSubmit = (event)=>{
        event.preventDefault(); // 기본 폼 제출 동작을 막음
        CreatePw(); // CheckEmail 함수 실행
    }

    return (
        <div className="login-container">
            <div className="brand-logo">
                <img src='/img/bombom_logo.png'/>
            </div>
            <div className="login-box">
                <div className="login-title">
                    <p>2단계</p>
                    <h2>계정을 생성하세요</h2>
                </div>
                <span><p>비밀번호를 입력해 계정을 생성하세요. 사용할 이메일 주소는 다음과 같습니다: bombom@naver.com</p></span>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                    <span>
                        <input type={inputType} placeholder='새 비밀번호' onChange={(e)=>{inputValueHandler(e); handleInputPw(e)}} value={userPw} required/>
                        <button type="button" className='view-control' onClick={()=>{toggleinputView()}}>
                            <span className="material-symbols-outlined icon">{inputIcon}</span>
                        </button>
                        <div className='input-bottom'>
                            <div className='bar' style={progressStyle()}>
                                <progress className={progressColor} value={safeLevel} max="6"></progress>
                                <div className="bar-text">{progressText}</div>
                            </div>
                            <div className="text">알파벳, 숫자, 특수 문자 3가지를 모두 포함해 총 8자(대소문자 구분) 이상이어야 합니다.</div>
                        </div>
                    </span>
                    </fieldset>
                    <div className='check-box' onClick={()=>{toggleCheckOn()}}>
                        <input/>
                        <div className='check-icon'>{checkOn?<span className="material-symbols-outlined icon">done</span>:null}</div>
                        <div className='check-text'>봄봄+의 개인정보 수집 및 이용에 동의합니다.</div>
                    </div>
                    <p className='signup-info'>봄봄+는 위의 사용자 동의에 따라 사용자 데이터를 이용해 봄봄+ 경험을 맞춤화 및 개선하고 봄봄+ 관련 정보를 발송합니다. 
                            커뮤니케이션 설정은 언제든지 변경하실 수 있습니다. 봄봄+는 개인정보 처리방침 및 개인정보 처리방침 부속서에 명시된 대로 사용자 정보를 이용할 수 있습니다.</p>
                    <div className="button-area">
                        <button type="submit" style={buttonStyle()} onClick={checkOn?null:()=>{alert('개인정보 수집 및 이용에 동의해주세요')}}>다음</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
