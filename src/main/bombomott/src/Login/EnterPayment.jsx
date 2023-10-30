import React, { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom'; 
import RegistPaymentLogic from '../BackEndData/RegistPaymentLogic'
import './css/enterPayment.css'
import notLoginCheck from '../notLoginCheck';

export default function EnterPayment() {
    const navigate = useNavigate()
    notLoginCheck();

    const [modal, setModal] = useState(false);
    const { userPay, handleInputPay, CheckPay} = RegistPaymentLogic()

    const handleSubmit = (event)=>{
        event.preventDefault(); // 기본 폼 제출 동작을 막음
        CheckPay(); // CheckEmail 함수 실행
    }

    return (
        <div className="login-container">
            <div className="brand-logo">
                <img src='/img/bombom_logo.png'/>
            </div>
            <div className="login-box">
                <div className="logo-title">
                    <p>3단계</p>
                    <h2>결제수단을 등록하세요</h2>
                </div>
                <span><p>봄봄+ 구독 정기결제에 사용하는 결제수단이 새로 등록한 계좌로 설정됩니다. 결제수단 등록 시 봄봄+ 구독이 시작됩니다.</p></span>
                <form onSubmit={handleSubmit}>
                    <fieldset>
                        <legend></legend>
                        <label>새로운 결제수단</label>
                        <span>
                            <input type="text" placeholder={'xxx-xxxxxx-xx-xxx oo은행'} onChange={handleInputPay} value={userPay} required/>
                            <div className='input-bottom'></div>
                        </span>
                    </fieldset>
                    <div className="button-area">
                        <button className='save' type="submit" >저장</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
