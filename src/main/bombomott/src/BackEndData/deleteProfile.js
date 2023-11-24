import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';

// 콘텐츠 재생시 최근본콘텐츠로 데이터 전송
export default function DeleteProfile(profileId) {

    const deleteProfile = () => {
        axios
            .post("http://localhost:8080/profile/delete-profileInfo", {
            profileId : profileId
        })
            .then((res) => {
                console.log(res.data)
            if(res.data.status == 1){
                console.log('성공')
                window.location.reload();
            }else{ 
                console.log('실패')
            }
            
        })
        .catch((error)=>{
            alert('메인 프로필은 삭제할 수 없습니다')
        });
    };

    return {
        deleteProfile
    }
}