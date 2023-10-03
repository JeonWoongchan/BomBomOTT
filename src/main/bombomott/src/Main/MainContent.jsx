import React, { useState, useEffect } from 'react';
import ContentSlide from './ContentSlide'
import useScroll from '../useScroll.js';

import './css/mainContent.css'
import { useSelector } from 'react-redux';

export default function MainContent() {
    const trendMovies = useSelector((state) => state.trendMovies)
    const tvShow = useSelector((state) => state.tvShow)
    const scroll = useScroll();  
    const DataList = [trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow]
    const [data, setData] = useState([]); //실제 보여줄 목록    
    const [count, setCount] = useState(0);//끝까지 스크롤 내린 횟수

    useEffect(()=>{
        //처음부터 data state의 초기값으로 trendMovies를 넣어서 설정하면 처음 랜더링될 때 trendMovies의 데이터 상태를 반영하지 않음
        //순서가 state랜더링, 페이지 랜더링 하고 trendMovies 내용 가져오는듯?

        setData(DataList.slice(0,4));  
        setCount(data.length)
    },[trendMovies])

    useEffect(()=>{
        if(scroll+window.innerHeight == document.documentElement.scrollHeight){
            setCount(count+2)
            setData(DataList.slice(0,count+2))
        }
    },[scroll])
    
    return (
        <div className='main-content-area'>
            {
                data.map((a,i)=>{
                    console.log(a)
                    return(
                        <ContentSlide key={i} data={a} id={i}/>
                    )
                }) 
            }
            
        </div>
    );
}



