import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PasswordView from '../PasswordView'
import './css/passwordModal.css'
import { setMovie } from '../store/store';

export default function PasswordModal(props) {
    const navigate = useNavigate()
    const [inputView, setInputView] = useState(false); // 패스워드 view on/off
    const [inputValue, setInputValue] = useState(''); //input창 텍스트

    const { inputIcon, inputType } = PasswordView(inputView, inputValue);

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

    return (
        <div className="password-modal-container">
            <div className='password-modal'>
                <h2>비밀번호를 확인해주세요</h2>
                <form action="">
                <fieldset>
                    <legend></legend>
                    <span>
                        <input type={inputType} placeholder='비밀번호' onChange={inputValueHandler}/>
                        <button type="button" className='view-control' onClick={()=>{toggleinputView()}}>
                            <span className="material-symbols-outlined icon">{inputIcon}</span>
                        </button>
                        <div className='input-bottom'>
                            <div className="text">(대소문자 구분)</div>
                        </div>
                    </span>
                </fieldset>
                <div className="button-area">
                    <button className='save'>저장</button>
                    <button className='cancel' type="button" onClick={()=>{props.setModal(false)}}>취소</button>
                </div>
                <button className='find-password' >비밀번호 찾기</button>
            </form>
            </div>
        </div>
        
    );
}

