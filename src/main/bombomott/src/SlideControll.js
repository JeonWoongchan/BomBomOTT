import './Main/css/mainContent.css'
import borderStyle from './Main/borderStyle';
import slideTitle from './Main/slideTitle.json'
import './contentSlide.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsDragging } from './store/store';

//창 크기에 따라 슬라이드 모양 조절하는 기능
function SlideControll(data, itemNum){
    const [innerWidth, setInnerWidth] = useState(window.innerWidth); 
    const [SlideItemNum, setSlideItemNum] = useState(innerWidth < 1450 ? 4 : 5) // 현재 창의 크기에 따라 한 슬라이드에서 보여줄 아이템 개수 지정

    useEffect(()=>{ // 창크기 변할때마다 슬라이드 조절
        const ResizeHandler = ()=>{
            const newWidth = window.innerWidth;
            setInnerWidth(newWidth)
            setSlideItemNum(window.innerWidth < 1450 ? 4 : 5)
        }
    
        window.addEventListener('resize', ResizeHandler)

        return () => {
            window.removeEventListener('resize', ResizeHandler);
        };
    })
    

    const carouselStyle = ()=>{
        return{
            height: SlideItemNum == 5 ? '13vw' : '16.5vw'
        }
    }

    const titleStyle = ()=>{
        return{
            top: SlideItemNum == 5 ? '0.5vw' : '0vw'
        }
    }
    return {
        SlideItemNum,
        carouselStyle,
        titleStyle
    };
}

export default SlideControll;