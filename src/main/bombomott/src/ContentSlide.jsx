import './Main/css/mainContent.css'
import borderStyle from './borderStyle';
import slideTitle from './Main/slideTitle.json'
import './contentSlide.css'
import SlideLogic from './SlideLogic'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { setIsLoading  } from './store/store';

function ContentSlide(props){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const {contentType} = useParams()
    const [mouseIndex, setMouseIndex] = useState('') 
    const isDragging = useSelector((state)=>state.isDragging)
    const contentDetail = useSelector((state)=>state.contentDetail)

    const DataArray = Array.isArray(props.data) ? [...props.data] 
                        : props.data && props.data.media_type == 'movie' ? new Array(1).fill(0) 
                        : new Array(props.episodeCount).fill(0);

    const DataLength =  (DataArray && DataArray.length) || 0;
    const { slideMouseDown, slideMouseMove, slideMouseUp, slideStyle, boxStyle } = SlideLogic(DataLength, props.SlideItemNum);

    return(
            <div className='content-slide' style={slideStyle()}
                onMouseDown={(e)=>{slideMouseDown(e)}} 
                onMouseMove={(e)=>{slideMouseMove(e)}}
                onMouseUp={(e)=>{slideMouseUp(e)}}>
            
            {

                DataArray.map((a,i)=>{
                    const Data = props.data[i]
                    const DataAll = props.data
                    return(
                        <div className="slide-box" key={i}
                            style={mouseIndex === i ? { ...boxStyle(i), ...borderStyle('box') } : boxStyle(i)}
                            onMouseEnter={()=>{setMouseIndex(i)}} 
                            onMouseLeave={()=>{setMouseIndex('')}}> 
                            <img src={`${BASE_URL}${Array.isArray(props.data) ? props.data[i].backdrop_path : props.data.backdrop_path}`}
                                style={isDragging === true ? { pointerEvents: 'none' } : null}
                                draggable="false" onClick={()=>{ navigate(`/content/${a.media_type}/${a.genre_ids[0]}/${a.id}`, {state:{ data: Data, dataAll: DataAll} })}}>
                            </img>
                            {contentType == 'series' && props.episodeCount 
                            ? <h6>{i+1}화 ({contentDetail.episode_run_time.length > 0 ?contentDetail.episode_run_time[0] : 60}분)</h6> : null} 
                            {/* 시리즈 콘텐츠 페이지의 에피소드 부분에만 회차 정보 표시 */}
                            {contentType && !props.episodeCount ? <h6>{props.data[i].name || props.data[i].title}</h6> : null} 
                            {/* 콘텐츠 페이지의 추천작 부분에만 제목 정보 표시 */}
                        </div>
                    )
                }) 
                // console.log(props.data)
            }
            </div>
    )
}

export default ContentSlide