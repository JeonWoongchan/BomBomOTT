import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import PasswordView from '../../PasswordView'
import PasswordSafeLevel from '../../PasswordSafeLevel';
import PasswordModal from './PasswordModal';
import '../css/resetPassword.css'
import '../css/progressBar.css'



export default function ResetPassword(){
    const navigate = useNavigate()
    const userId = 'userId';

    const [modal, setModal] = useState(false);
    const [inputView, setInputView] = useState(false); // 패스워드 view on/off
    const [inputValue, setInputValue] = useState(''); //input창 텍스트

    const [checkOn, setCheckOn] = useState(false); // checkbox on/off
    const [hideText, setHideText] = useState(''); // 숨겨진 텍스트

    const { inputIcon, inputType } = PasswordView(inputView, inputValue);
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

    useEffect(()=>{
        if(checkOn){
            setHideText('비밀번호를 변경한 후 이 기기에서 로그아웃됩니다. 다른 기기에서 모두 로그아웃되기까지 최대 4시간이 소요될 수 있습니다.')
        }else{
            setHideText()
        }
    },[checkOn])

    const inputValueHandler = (e)=>{
        setInputValue(e.target.value)
    }

    const progressStyle = ()=>{
        return{
            display: inputValue.length > 0 ? 'flex ' : 'none',
            transition : 'all 0.2s'
        }
    }

    return(
        <div className="change-detail">
            {modal ? <PasswordModal setModal={setModal}/> : null}
            <div className="change-title">
                <h2>새 비밀번호을 생성하세요</h2>
            </div>
            <span><p>봄봄+ 계정 로그인에 사용하는 비밀번호가 아래 입력한 이메일로 변경됩니다.</p></span>
            <form action="">
                <fieldset>
                    <legend></legend>
                    <span>
                        <input type={inputType} placeholder='새 비밀번호' onChange={inputValueHandler}/>
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
                    <div><div className='check-text'>모든 기기에서 로그아웃
                        <div className="hide-text">{hideText}</div>
                    </div></div>
                </div>
                <div className="button-area">
                    <button className='save' type="button" onClick={()=>{setModal(true)}}>저장</button>
                    <button className='cancel' type="button" onClick={()=>{navigate(-1)}}>취소</button>
                </div>
            </form>
        </div>
    )
}