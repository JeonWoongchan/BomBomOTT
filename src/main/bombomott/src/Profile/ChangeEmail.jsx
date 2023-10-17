import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/changeEmail.css'
import PasswordModal from './PasswordModal';

export default function ChangeEmail(){
    const [modal, setModal] = useState(false);
    const navigate = useNavigate()
    const userId = 'userId';
    const currentEmail = 'bombom@younsung.ac.kr';

    const [checkOn, setCheckOn] = useState(false);
    const [hideText, setHideText] = useState('');

    const toggleCheckOn = () => {
        if(checkOn){
            setCheckOn(false)
        }else{
            setCheckOn(true)
        }
    }

    useEffect(()=>{
        if(checkOn){
            setHideText('이메일을 변경한 후 이 기기에서 로그아웃됩니다. 다른 기기에서 모두 로그아웃되기까지 최대 4시간이 소요될 수 있습니다.')
        }else{
            setHideText()
        }
    },[checkOn])

    return(
        <div className="change-detail">
            {modal ? <PasswordModal setModal={setModal}/> : null}
            <div className="change-title">
                <h2>이메일을 변경하세요</h2>
            </div>
            <span><p>봄봄+ 계정 로그인에 사용하는 이메일이 아래 입력한 이메일로 변경됩니다.</p></span>
            <p className='currunt'>현재 이메일: <span>{currentEmail}</span></p>
            <form action="">
                <fieldset>
                    <legend>currentEmail</legend>
                    <label>새로운 이메일</label>
                    <span>
                        <input type="text" placeholder={currentEmail}/>
                        <div className='input-bottom'></div>
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
                    <button className='save' type="button" onClick={()=>{setModal(true)}}>저장</button>
                    <button className='cancel' type="button" onClick={()=>{navigate(-1)}}>취소</button>
                </div>
            </form>
        </div>
    )
}