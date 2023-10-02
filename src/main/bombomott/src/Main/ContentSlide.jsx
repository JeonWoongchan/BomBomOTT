import React, { useEffect, useState } from 'react';
import './css/mainContent.css'
import { useSelector, useDispatch } from 'react-redux';

function ContentSlide(props){
    const trendMovies = useSelector((state) => state.trendMovies)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    const length = trendMovies.length;
    const [style, setStyle] = useState({opacity : 1});
    const [mouseOver, setMouseOver] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setStyle({opacity : 0.3, transition: `opacity 0.4s`})
        },300)
    },[props.num])

    const slideStyle = (i) => {
        let copy = props.num
        if(copy >= length){
            copy = copy - length
        }
        if(copy != i){
            return style
        }else if(mouseOver == true && copy == i){
            return{
                boxShadow: `20px 20px 20px 20px rgba(5, 6, 7, 0.75)`,
                transition : 'all 0.5s'
            }
        }
    }

    return(
        <div className='content-slide'>
        {
            props.data.slice(0,15).map((a,i)=>{
                return(
                    <div className="slide-box" key={i} id={i}> 
                        <img src={`${BASE_URL}${trendMovies[i].backdrop_path}`} draggable="false" style={slideStyle(i)}
                            onMouseEnter={()=>{setMouseOver(true)}}
                            onMouseLeave={()=>{setMouseOver(false)}}/>
                    </div>
                )
            })
        }
        </div>
        
    )
}

export default ContentSlide