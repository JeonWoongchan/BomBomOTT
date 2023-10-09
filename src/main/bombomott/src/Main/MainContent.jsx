import React, { useState, useEffect } from 'react';
import ContentSlide from '../ContentSlide'
import useScroll from '../useScroll.js';
import slideTitle from './slideTitle.json'
import ScrollLoading from '../ScrollLoading'

import './css/mainContent.css'
import { useSelector, useDispatch } from 'react-redux';

export default function MainContent(props) {
    const trendMovies = useSelector((state) => state.trendMovies)
    const tvShow = useSelector((state) => state.tvShow)
    
    const scroll = useScroll();  
    const DataList = [trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow]
    
    const { data } = ScrollLoading(DataList, trendMovies, tvShow, scroll)
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
            height: SlideItemNum == 5 ? '14vw' : '17.5vw'
        }
    }

    const titleStyle = ()=>{
        return{
            top: SlideItemNum == 5 ? '0.5vw' : '0vw'
        }
    }

    return (
        <div className='main-content-area'>
            {
                data.map((a,i)=>{
                    return(
                        <div className='content-carousel' key={i} style={carouselStyle()}>
                            <h4 className='slide-title' style={titleStyle()}>{slideTitle.title[i].title}</h4>
                            <ContentSlide data={a} id={i} SlideItemNum={SlideItemNum}/>
                        </div>
                        
                    )
                }) 
            } 
        </div>
    );
}



