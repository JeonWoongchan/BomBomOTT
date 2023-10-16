import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import buttonContent from './buttonContent.json'
import borderStyle from './borderStyle';
import './css/buttonContainer.css'

export default function ButtonContainer() {
    const navigate = useNavigate()
    const [mouseIndex, setMouseIndex] = useState('')
    const [isPlaying, setIsPlaying] = useState('autoPlay');
    
    return (
        <div className='button-area'>
            <div className="button-container">
            {
            buttonContent.data.map((a,i)=>{
                const Data = buttonContent.data[i]
                return(
                    <div className="button-box" key={i} style={mouseIndex === i ? borderStyle('box') : null}
                            onMouseEnter={()=>{setMouseIndex(i)}} 
                            onMouseLeave={()=>{setMouseIndex('')}}>
                        <div className="button-cover">
                            <img src={`${buttonContent.data[i].img1}`} onClick={()=>{ navigate(`/brand/${a.brand}`, {state:{ data : Data } })}}/>
                            <video className='button-video' style={mouseIndex === i ? borderStyle('video') : null} loop autoPlay muted>
                                <source src={`${buttonContent.data[i].video1}`} type='video/mp4'/>
                            </video>
                        </div>
                    </div>
                    )
                })
            }
            </div>
        </div>
    );
}


