import React from 'react';
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../store/store';

import ContentSlide from '../ContentSlide'
import useScroll from '../useScroll.js';
import disneyTitle from './disneyTitle.json'
import ScrollLoading from '../ScrollLoading'
import useApi from '../useApi';

export default function BrandMain(props) {
    const [videoEnded, setVideoEnded] = useState(false);    
    const trendMovies = useSelector((state) => state.trendMovies)
    const tvShow = useSelector((state) => state.tvShow)
    const isLoading = useSelector((state) => state.isLoading)
    const dispatch = useDispatch();
    const scroll = useScroll();  
    const DataList = [trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow, trendMovies, tvShow]

    const { data } = ScrollLoading(DataList, trendMovies, tvShow, scroll) 
    const [dataLoading, setDataLoading] = useState(false);

    useEffect(()=>{
        if(data.length == 0){
            console.log('비어잇음')
        }else{
            setDataLoading(true)
        }
    },[data])

    const VideoStyle = ()=>{
        return{
            opacity : videoEnded == true ? 0 : 1,
            zIndex : videoEnded == true ? -1 : 0,
        }
    }

    const imageStyle = ()=>{
        return{
            opacity : videoEnded == true ? 1 : 0,
        }
    }
    return (
        !dataLoading ? <h1>Now Loading...</h1> :
        <div id='brandMain'>
            <div id="brand_main_content">
                <div className="brand-background-section"></div>
                <main className='brand-main-section'>
                    <video className='brand-video' autoPlay muted onEnded={()=>{setVideoEnded(true)}} style={VideoStyle()}>
                        <source src={props.BrandData.video2} type='video/mp4'/>
                    </video>
                    <div className="brand-background" style={imageStyle()}>
                        <img src={props.BrandData.img2} alt="" />
                    </div>
                    <div className="brand-image" style={imageStyle()}>
                        <img src={props.BrandData.img3} alt="" />
                    </div>                  
                    <div className="brand-slide">
                    { 
                        data.map((a,i)=>{
                            return(
                                <div className='content-carousel' key={i}>
                                    <h4 className='slide-title'>{disneyTitle.title[i].title}</h4>
                                    <ContentSlide data={a} id={i}/>
                                </div>
                                
                            )
                        }) 
                    } 
                    </div>
                </main>
            </div>
        </div>
    );
}

