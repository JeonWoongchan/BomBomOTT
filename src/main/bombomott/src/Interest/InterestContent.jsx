import './css/interestContent.css'
import borderStyle from '../borderStyle';
import ReciveInterest from '../BackEndData/ReciveInterest'

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setIsLoading } from '../store/store';

export default function InterestContent() {
    const navigate = useNavigate()
    const profileId = localStorage.getItem('profileId')
    const {interestList, resultList, reciveInterest} = ReciveInterest(profileId)
    
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const [boxOpacity, setBoxOpacity] = useState(true);
    const [mouseIndex, setMouseIndex] = useState('') 
    const [loadCount, setLoadCount] = useState(0);

    useEffect(()=>{ // 이미지 로딩 완료시 보여지도록 설정
        if(loadCount >= 10){
            setIsLoading(false)
            setBoxOpacity(true)
        }
        // console.log(loadCount)
    },[loadCount])

    useEffect(()=>{
        reciveInterest()
    },[])

    const contentBoxStyle = ()=>{
        return{
            opacity : boxOpacity ? 1 : 0,
            transition : 'all 0.5s'
        }
    }
    return (
        <div className="category-content">
            <div className="content-box" style={contentBoxStyle()}>
                {
                    resultList.map((a,i)=>{
                        const Data = resultList[i]
                        const DataAll = resultList.filter((e)=>e.backdrop_path != null);//이미지 없으면 안가져옴
                        const TYPE = interestList[i].mediaType
                        return(
                            resultList[i].backdrop_path != null ? 
                            <img src={`${BASE_URL}${resultList[i].backdrop_path}`} key={i} style={mouseIndex === i ? borderStyle('box') : null}
                            onMouseEnter={()=>{setMouseIndex(i)}} onMouseLeave={()=>{setMouseIndex('')}} onLoad={()=>{setLoadCount((prev)=>prev+1)}}
                            onClick={()=>{ navigate(`/content/${TYPE}/${a.genre_ids ? a.genre_ids[0]: a.genres[0].id}/${a.id}`, {state:{ data: Data, dataAll: DataAll} })}}/> : null
                        )
                    })
                }
            </div>                
        </div>
    );
}

