import React from 'react';
import axios from 'axios';

import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';


export default function ReciveInterest(profile) {
    const [interestList, setInterestList] = useState([]);
    const [resultList, setResultList] = useState([]);

    const reciveInterest = () => {
        axios
            .post("http://localhost:8080/interest ", {
                profileId: profile
            })
            .then((res) => {
                console.log(res.data.interests[0].contentId)
                if(res.data.status == 1 ){ //이메일 있음
                    console.log('성공')
                    setInterestList(res.data.interests)
                }
            })
            .catch((error)=>{
                console.log(error)
            });
    };

    useEffect(()=>{
        const fetchData = async () => {
            const updatedResults = [];
    
            for (const interest of interestList) {
                const TYPE = interest.mediaType === 'series' ? 'tv' : 'movie';
    
                try {
                    const response = await axios.get(`https://api.themoviedb.org/3/${TYPE}/${interest.contentId}?language=ko-KR`, {
                        headers: {
                            accept: 'application/json',
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmD8ZcNDA2NiJzB3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
                        }
                    });
                    updatedResults.push(response.data);
                } catch (error) {
                    console.error(error);
                }
            }
    
            setResultList(updatedResults);
        };
    
        fetchData();
    },[interestList])

    useEffect(()=>{
        console.log(resultList)
    },[resultList])

    return {
        interestList,
        resultList,
        reciveInterest
    }
}