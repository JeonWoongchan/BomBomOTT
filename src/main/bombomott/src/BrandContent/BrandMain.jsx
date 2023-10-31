import React from 'react';
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import ContentSlide from '../ContentSlide'
import useScroll from '../useScroll.js';
import disneyTitle from './disneyTitle.json'
import ScrollLoading from '../ScrollLoading'
import SlideControll from '../SlideControll'
import LoadingLogic from '../LoadingLogic'
import DisneyContentApi from './DisneyContentApi';
import StarWarsContentApi from './StarWarsContentApi';
import KoreaContentApi from './KoreaContentApi'

export default function BrandMain(props) {
    const {brandName} = useParams()
    const [videoEnded, setVideoEnded] = useState(false);    
    const {brandData1, brandData2, brandData3, brandData4} = brandName == 'starwars'? StarWarsContentApi() 
                                                            : brandName == 'star'? KoreaContentApi() : DisneyContentApi(brandName)

    const scroll = useScroll();  
    const DataList = [brandData1, brandData2, brandData3, brandData4]

    const { data } = ScrollLoading(DataList, scroll) 
    const {SlideItemNum, carouselStyle, titleStyle} =  SlideControll();
    const {dataLoading} =  LoadingLogic(data);

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
        !dataLoading ? console.log('Now Loading...') :
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
                                <div className='content-carousel' key={i} style={carouselStyle()}>
                                    <h4 className='slide-title' style={titleStyle()}>{disneyTitle.title[i].title}</h4>
                                    <ContentSlide data={a} id={i} SlideItemNum={SlideItemNum}/>
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

