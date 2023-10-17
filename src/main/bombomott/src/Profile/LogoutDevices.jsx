import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/logoutDevices.css'
import PasswordView from '../PasswordView'
import PasswordModal from './PasswordModal';

export default function LogoutDevices(){
    const navigate = useNavigate()
    const userId = 'userId';

    const [inputView, setInputView] = useState(false); // 패스워드 view on/off
    const [inputValue, setInputValue] = useState(''); //input창 텍스트
    const [modal, setModal] = useState(false);

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

    return(
        <div className="change-detail">
            {modal ? <PasswordModal setModal={setModal}/> : null}
            <div className="change-title">
                <h2>모든 기기에서 로그아웃</h2>
            </div>
            <span><p>비밀번호를 입력해 로그아웃을 진행하세요. 이 기기는 즉시 로그아웃됩니다. 다른 기기에서는 로그아웃되기까지 최대 4시간이 소요될 수 있습니다.</p></span>
            <form action="">
                <fieldset>
                    <legend></legend>
                    <label>비밀번호</label>
                    <span>
                        <input type={inputType} placeholder='새 비밀번호' onChange={inputValueHandler}/>
                        <button type="button" className='view-control' onClick={()=>{toggleinputView()}}>
                            <span className="material-symbols-outlined icon">{inputIcon}</span>
                        </button>
                        <div className='input-bottom'>
                            <div className="text">(대소문자 구분)</div>
                        </div>
                    </span>
                </fieldset>
                <div className="button-area">
                    <button className='save' type="button" onClick={()=>{setModal(true)}}>저장</button>
                    <button className='cancel' type="button" onClick={()=>{navigate(-1)}}>취소</button>
                </div>
                <button className='find-password'>비밀번호 찾기</button>
            </form>
        </div>
    )
}