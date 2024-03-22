import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function AddInterest(profile, content, type) {

    const addInterest = () => {
        axios
            .post("http://localhost:8080/content/* ", {
                contentId: content,
                profileId: profile,
                mediaType: type
            })
            .then((res) => {
                console.log(res.data)
                if(res.data.status == 1 ){ //이메일 있음
                    console.log('성공')
                    alert('관심콘텐츠에 추가되었습니다')
                }else if(res.data.status == -1 ){ //이메일 있음
                    console.log('성공')
                    alert('이미 저장되어있는 콘텐츠입니다')
                }
            })
            .catch((error)=>{
                console.log(error)
            });
    };

    return {
        addInterest
    }
}