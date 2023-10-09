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

    return (
        <div className='main-content-area'>
            {
                data.map((a,i)=>{
                    return(
                        <div className='content-carousel' key={i}>
                            <h4 className='slide-title'>{slideTitle.title[i].title}</h4>
                            <ContentSlide data={a} id={i} mainLoading={props.mainLoading} setMainLoading={props.setMainLoading}/>
                        </div>
                        
                    )
                }) 
            } 
        </div>
    );
}



