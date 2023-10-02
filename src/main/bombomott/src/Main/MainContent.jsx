import React, { useState, useEffect } from 'react';
import ContentSlide from './ContentSlide'
import useScroll from '../useScroll.js';

import './css/mainContent.css'
import { useSelector } from 'react-redux';

export default function MainContent() {
    const trendMovies = useSelector((state) => state.trendMovies)
    const DataList = [trendMovies, trendMovies, trendMovies, trendMovies, trendMovies, trendMovies]
    const [data, setData] = useState([]); //실제 보여줄 목록
    const components = 2;
    const scroll = useScroll();    
    console.log(scroll)

    useEffect(()=>{
        setData([trendMovies, trendMovies, trendMovies, trendMovies]);
        //처음부터 data state의 초기값으로 trendMovies를 넣어서 설정하면 처음 랜더링될 때 trendMovies의 데이터 상태를 반영하지 않음
        //순서가 state랜더링, 페이지 랜더링 하고 trendMovies 내용 가져오는듯?
        if(scroll > 1000){
            const copy = [...data];
            copy.push(DataList.slice(0,2))
            setData(copy)
            //DataList에 전체로딩됐을때 보여줄 컨텐츠 목록 다넣기
            //스크롤 위치에 따라 실제 보여줄 data state에 목록 추가하기 
        }
    }, [scroll])

    return (
        <div className='main-content-area'>
            {
                data.map((a,i)=>{
                    return(
                        <ContentSlide key={i} data={a}/>
                    )
                }) 
            }
            
        </div>
    );
}



