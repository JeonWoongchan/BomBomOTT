import React, { useEffect, useState } from 'react';
import slideImg from './slideImage.json'
import buttonContent from './buttonContent.json'
import borderStyle from './borderStyle';
import './css/buttonContainer.css'

export default function ButtonContainer() {
    const [mouseIndex, setMouseIndex] = useState('')
    const [isPlaying, setIsPlaying] = useState('autoPlay');
    
    return (
        <div className='button-area'>
            <div className="button-container">
            {
            buttonContent.data.map((a,i)=>{
                return(
                    <div className="button-box" key={i} style={mouseIndex === i ? borderStyle('box') : null}
                            onMouseEnter={()=>{setMouseIndex(i)}} 
                            onMouseLeave={()=>{setMouseIndex('')}}>
                        <div className="button-cover">
                            <img src={`${buttonContent.data[i].img}`}/>
                            <video className='button-video' style={mouseIndex === i ? borderStyle('video') : null} loop autoPlay muted>
                                <source src={`${buttonContent.data[i].video}`} type='video/mp4'/>
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


