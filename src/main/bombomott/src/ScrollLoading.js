import React, { useState, useEffect } from 'react';
import useScroll from './useScroll.js';
import { useSelector, useDispatch } from 'react-redux';

export default function ScrollLoading(DataList, data1, data2, scroll) {
    const [data, setData] = useState([]); //실제 보여줄 목록    
    const [count, setCount] = useState(0);//끝까지 스크롤 내린 횟수

    useEffect(()=>{
        //처음부터 data state의 초기값으로 trendMovies를 넣어서 설정하면 처음 랜더링될 때 trendMovies의 데이터 상태를 반영하지 않음
        //순서가 state랜더링, 페이지 랜더링 하고 trendMovies 내용 가져오는듯?

        if (data1 && data2) {
            // 데이터를 초기화하고 상태를 업데이트
            setData(DataList.slice(0, 4));  
            setCount(data.length);
        }
    },[data1,data2])

    useEffect(()=>{
        if(scroll+window.innerHeight >= document.documentElement.scrollHeight){//스크롤 끝까지 내렸을때
            setCount(count+2)    
        }
    },[count, scroll])

    useEffect(()=>{//count가 변경된 이후에 data를 변경하도록 설정
        setData(DataList.slice(0,count)) 
    },[count])

    return {data}
}