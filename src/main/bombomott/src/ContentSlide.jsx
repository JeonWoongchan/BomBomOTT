import './Main/css/mainContent.css'
import borderStyle from './borderStyle';
import slideTitle from './Main/slideTitle.json'
import './contentSlide.css'
import SlideLogic from './SlideLogic'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsLoading  } from './store/store';

function ContentSlide(props){
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const [mouseIndex, setMouseIndex] = useState('')
    const DataLength =  (props.data && props.data.length) || 0; 
    const isDragging = useSelector((state)=>state.isDragging)
    const DataArray = Array.isArray(props.data) ? [...props.data] : props.data && props.data.media_type == 'movie' ? new Array(1).fill(0) : new Array(10).fill(0);
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
                        </div>
                    )
                }) 
                // console.log(props.data)
            }
            </div>
    )
}

export default ContentSlide