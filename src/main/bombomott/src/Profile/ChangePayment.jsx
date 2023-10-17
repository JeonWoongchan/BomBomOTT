import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/changeEmail.css'
import PasswordModal from './PasswordModal';

export default function ChangePayment(){
    const navigate = useNavigate()
    const userId = 'userId';
    const currentPayment = '123-456789-00000';
    const currentBank = '봄봄은행';

    const [checkOn, setCheckOn] = useState(false);
    const [modal, setModal] = useState(false);
    const [hideText, setHideText] = useState('');

    const toggleCheckOn = () => {
        if(checkOn){
            setCheckOn(false)
        }else{
            setCheckOn(true)
        }
    }

    return(
        <div className="change-detail">
            {modal ? <PasswordModal setModal={setModal}/> : null}
            <div className="change-title">
                <h2>결제수단을 변경하세요</h2>
            </div>
            <span><p>봄봄+ 구독 정기결제에 사용하는 결제수단이 새로 등록한 계좌로 변경됩니다.</p></span>
            <p className='currunt'>현재 이메일: <span>{`${currentPayment}  ${currentBank}`}</span></p>
            <form action="">
                <fieldset>
                    <legend></legend>
                    <label>새로운 결제수단</label>
                    <span>
                        <input type="text" placeholder={'새로운 계좌번호'}/>
                        <div className='input-bottom'></div>
                    </span>
                </fieldset>
                <div className="button-area">
                    <button className='save' type="button" onClick={()=>{setModal(true)}}>저장</button>
                    <button className='cancel' type="button" onClick={()=>{navigate(-1)}}>취소</button>
                </div>
            </form>
        </div>
    )
}