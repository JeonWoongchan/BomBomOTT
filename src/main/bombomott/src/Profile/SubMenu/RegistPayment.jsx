import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/changeEmail.css'
import PasswordModal from './PasswordModal';
import RegistPaymentLogic from '../../BackEndData/RegistPaymentLogic'

export default function RegistPayment(){
    const navigate = useNavigate()
    const userId = 'userId';
    const currentPayment = '123-456789-00-000';
    const currentBank = '봄봄은행';

    const [modal, setModal] = useState(false);
    const { userPay, handleInputPay, CheckPay} = RegistPaymentLogic()

    return(
        <div className="change-detail">
            {modal ? <PasswordModal setModal={setModal} changeData={'payment'}/> : null}
            <div className="change-title">
                <h2>결제수단을 등록하세요</h2>
            </div>
            <span><p>봄봄+ 구독 정기결제에 사용하는 결제수단이 새로 등록한 계좌로 변경됩니다.</p></span>
            <p className='currunt'>현재 계좌번호: <span>{`${currentPayment}  ${currentBank}`}</span></p>
            <form action="">
                <fieldset>
                    <legend></legend>
                    <label>새로운 결제수단</label>
                    <span>
                        <input type="text" placeholder={'xxx-xxxxxx-xx-xxx oo은행'} onChange={handleInputPay} value={userPay} required/>
                        <div className='input-bottom'></div>
                    </span>
                </fieldset>
                <div className="button-area">
                    <button className='save' type="button" onClick={()=>{setModal(true); CheckPay()}}>저장</button>
                    <button className='cancel' type="button" onClick={()=>{navigate(-1)}}>취소</button>
                </div>
            </form>
        </div>
    )
}