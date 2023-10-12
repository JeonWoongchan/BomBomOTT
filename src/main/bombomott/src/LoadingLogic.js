import './Main/css/mainContent.css'
import borderStyle from './Main/borderStyle';
import slideTitle from './Main/slideTitle.json'
import './contentSlide.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsLoading } from './store/store';

//data가 전부 들어온 다음에 페이지 로딩되도록 하는 기능
function SlideLogic(data, itemNum){
    const [dataLoading, setDataLoading] = useState(false);
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch();

    useEffect(()=>{
        if(data.length < 4){
            console.log('로딩중')
            dispatch(setIsLoading(true))
        }else{
            dispatch(setIsLoading(false))
        }
    },[data])

    useEffect(()=>{
        if(!isLoading){
            setDataLoading(true)
        }
    },[isLoading])

    return {
        dataLoading
    };
}

export default SlideLogic;