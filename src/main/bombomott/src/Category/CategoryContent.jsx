import './css/categoryContent.css'
import borderStyle from '../borderStyle';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setIsLoading } from '../store/store';

export default function CategoryContent() {
    const navigate = useNavigate()
    const {mediaType, categoryType} = useParams()
    const genreMovie = useSelector((state)=>state.genreMovie);
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const [boxOpacity, setBoxOpacity] = useState(true);
    const [mouseIndex, setMouseIndex] = useState('') 
    const [loadCount, setLoadCount] = useState(0);

    useEffect(()=>{ // 카테고리 변경시 이미지 불투명하게
        setIsLoading(true)
        setBoxOpacity(false);
        setLoadCount(0)
    },[mediaType, categoryType])

    useEffect(()=>{ // 이미지 로딩 완료시 보여지도록 설정
        if(loadCount >= 10){
            setIsLoading(false)
            setBoxOpacity(true)
        }
        // console.log(loadCount)
    },[loadCount])

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
                    genreMovie.map((a,i)=>{
                        const Data = genreMovie[i]
                        const DataAll = genreMovie
                        const TYPE = a.mediaType == undefined ? mediaType : a.mediaType 
                        // console.log(genreMovie)
                        return(
                            genreMovie[i].backdrop_path != null ? //이미지 없으면 안가져옴
                            <img src={`${BASE_URL}${genreMovie[i].backdrop_path}`} key={i} style={mouseIndex === i ? borderStyle('box') : null}
                            onMouseEnter={()=>{setMouseIndex(i)}} onMouseLeave={()=>{setMouseIndex('')}} onLoad={()=>{setLoadCount((prev)=>prev+1)}}
                            onClick={()=>{ navigate(`/content/${TYPE}/${a.genre_ids[0]}/${a.id}`, {state:{ data: Data, dataAll: DataAll} })}}/> : null
                        )
                    })
                }
            </div>                
        </div>
    );
}

