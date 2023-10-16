import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/resetPassword.css'
import './css/progressBar.css'
import { current } from '@reduxjs/toolkit';

export default function ResetPassword(){
    const navigate = useNavigate()
    const userId = 'userId';

    const [inputOn, setInputOn] = useState(false); // 패스워드 view on/off
    const [inputIcon, setInputIcon] = useState('visibility_off'); //input창 아이콘
    const [inputValue, setInputValue] = useState('');
    const [safeLevel, setSafeLevel] = useState(0);
    const [progressText, setProgressText] = useState('약함');
    const [progressColor, setProgressColor] = useState('red');

    const [checkOn, setCheckOn] = useState(false); // checkbox on/off
    const [hideText, setHideText] = useState(''); //숨겨진 텍스트

    const toggleCheckOn = () => {
        if(checkOn){
            setCheckOn(false)
        }else{
            setCheckOn(true)
        }
    }
    
    const toggleInputOn = () => {
        if(inputOn){
            setInputOn(false)
        }else{
            setInputOn(true)
        }
    }

    useEffect(()=>{
        if(checkOn){
            setHideText('비밀번호를 변경한 후 이 기기에서 로그아웃됩니다. 다른 기기에서 모두 로그아웃되기까지 최대 4시간이 소요될 수 있습니다.')
        }else{
            setHideText()
        }
    },[checkOn])

    useEffect(()=>{
        if(inputOn){
            setInputIcon('visibility')
        }else{
            setInputIcon('visibility_off')
        }
    },[inputOn])

    const inputValueHandler = (e)=>{
        setInputValue(e.target.value)
    }

    useEffect(() => { // 비밀번호 안전단계 판별
        let newSafeLevel = 0;

        if (inputValue.length > 13 && /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%]).*$/.test(inputValue)) {
            newSafeLevel = 6;
        } else if (inputValue.length > 10 && /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[@#$%]).*$/.test(inputValue)) {
            newSafeLevel = 5;
        } else if (inputValue.length > 10 && /^(?=.*[0-9])(?=.*[a-zA-Z]).*$/.test(inputValue)) {
            newSafeLevel = 4;
        } else if (inputValue.length >= 8) {
            newSafeLevel = 3;
        }else if (inputValue.length < 8 && inputValue.length >= 5) {
            newSafeLevel = 2;
        } else if (inputValue.length < 5 && inputValue.length > 0) {
            newSafeLevel = 1;
        } else if (inputValue.length == 0){
            newSafeLevel = 0;
        }
    
        setSafeLevel(newSafeLevel);
        console.log(safeLevel);
    }, [inputValue]);

    useEffect(()=>{
        if(safeLevel >= 4){
            setProgressColor('green')
            setProgressText('강함')
        }else if(safeLevel == 3){
            setProgressColor('yellow')
            setProgressText('중간')
        }else if(safeLevel < 3){
            setProgressColor('red')
            setProgressText('약함')
        }
        console.log(progressColor)
    },[safeLevel])

    const progressStyle = ()=>{
        return{
            display: inputValue.length > 0 ? 'flex ' : 'none',
            transition : 'all 0.2s'
        }
    }

    return(
        <div className="change-detail">
            <div className="change-title">
                <h2>새 비밀번호을 생성하세요</h2>
            </div>
            <span><p>봄봄+ 계정 로그인에 사용하는 비밀번호가 아래 입력한 이메일로 변경됩니다.</p></span>
            <form action="">
                <fieldset>
                    <legend>currentEmail</legend>
                    <span>
                        <input type="text" placeholder='새 비밀번호' onChange={inputValueHandler}/>
                        <button type="button" className='view-control' onClick={()=>{toggleInputOn()}}>
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
                    <div className='check-icon'>{checkOn?<span class="material-symbols-outlined icon">done</span>:null}</div>
                    <div><div className='check-text'>모든 기기에서 로그아웃
                        <div className="hide-text">{hideText}</div>
                    </div></div>
                </div>
                <div className="button-area">
                    <button className='save'>저장</button>
                    <button className='cancel'>취소</button>
                </div>
            </form>
        </div>
    )
}