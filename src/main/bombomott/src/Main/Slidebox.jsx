import React, { useEffect, useState } from 'react';
import slideImg from './slideImage.json'
import Slider from "react-slick";
import './css/carousel.css'

function SlideBox(props){
    const length = slideImg.images.length;
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
        <>
        {
            slideImg.images.map((a,i)=>{
                return(
                    <div className="slide-box" key={i} id={i}> 
                        <img src={`${slideImg.images[i].img}`} draggable="false" style={slideStyle(i)}
                            onMouseEnter={()=>{setMouseOver(true)}}
                            onMouseLeave={()=>{setMouseOver(false)}}/>
                    </div>
                )
            })
        }
        </>
        
    )
}

export default SlideBox