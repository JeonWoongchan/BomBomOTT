import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './css/account.css'

export default function Account(){
    const navigate = useNavigate()
    const userId = 'userId';

    return(
        <div className="account-detail">
            <div className="account-title">
                <h2>계정</h2>
            </div>
            <div id="accountInfo" className='account-info'>
                <div className="info-title">계정 정보</div>
                <div className="info-content">
                    <div className="info-inner">
                        <div className='text'>이메일 정보 표시</div>
                        <span className="material-symbols-outlined icon" onClick={()=>{navigate(`/profile/${userId}/account/change-email`)}}>edit</span>
                    </div>
                </div>
                <div className="info-content">
                    <div className="info-inner">
                        <div className='text'>비밀번호 정보 *로 표시</div>
                        <span className="material-symbols-outlined icon" onClick={()=>{navigate(`/profile/${userId}/account/reset-password`)}}>edit</span>
                    </div>
                </div>
                <div className="info-content">
                    <div className="info-inner">
                        <button>모든 기기에서 로그아웃</button>
                    </div>
                </div>
            </div>
            <div id="subscribeInfo" className='account-info'>
                <div className="info-title">구독 정보</div>
                <div className="info-content">
                    <div className="info-inner">
                        <div className="box">
                            <div className="text">구독 정보 표시</div>
                            <div className="text">카드/계좌 정보 표시</div>
                        </div>
                        <span className="material-symbols-outlined icon">edit</span>
                    </div>
                </div>
            </div>
            <div id="accountSetting" className='account-info'>
                <div className="info-title">설정</div>
                <div className="info-content">
                    <div className="info-inner">
                        <div className="box">
                            <div className="text">프로필 생성 제한</div>
                            <div className="text">새로운 프로필 생성 시 비밀번호를 입력해야 합니다.</div>
                        </div>
                        <span className="material-symbols-outlined icon">toggle_off</span>
                    </div>
                </div>
                <div className="info-content">
                    <div className="info-inner">
                        <div className='text'>계정 탈퇴</div>
                        <span className="material-symbols-outlined">navigate_next</span>
                    </div>
                </div>
            </div>
            <div className="information">
                <p>계정을 관리에 관하여 생긴 문의는 <span>고객센터</span> 페이지를 방문하세요 </p>
            </div>
        </div>
    )
}