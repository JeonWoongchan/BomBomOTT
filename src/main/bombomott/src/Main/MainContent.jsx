import React, { useState, useEffect } from 'react';
import ContentSlide from '../ContentSlide'
import useScroll from '../useScroll.js';
import slideTitle from './slideTitle.json'
import ScrollLoading from '../ScrollLoading'
import SlideControll from '../SlideControll'
import LoadingLogic from '../LoadingLogic'

import './css/mainContent.css'
import { useSelector, useDispatch } from 'react-redux';

export default function MainContent(props) {
    const trendMovies = useSelector((state) => state.trendMovies)
    const tvShow = useSelector((state) => state.tvShow)
    
    const scroll = useScroll();  
    const DataList = [trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow]
    
    const { data } = ScrollLoading(DataList, trendMovies, tvShow, scroll)
    const {SlideItemNum, carouselStyle, titleStyle} =  SlideControll();
    const {dataLoading} =  LoadingLogic(data, 4);//데이터 로딩이 다 되면 페이지 로딩되도록

    return (
        !dataLoading ? console.log('Now Loading...') :
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



