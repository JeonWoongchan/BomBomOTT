import React, { useEffect, useState } from 'react';
import slideImg from './slideImage.json'
import buttonContent from './buttonContent.json'
import './css/buttonContainer.css'

export default function ButtonContainer() {
    const [mouseIndex, setMouseIndex] = useState('')
    const [isPlaying, setIsPlaying] = useState('autoPlay');

    const videoStyle = (i) => {
        return{
            display: mouseIndex === i ? 'block' : 'none',
        }
    }

    return (
        <div className='button-area'>
            <div className="button-container">
            {
            buttonContent.data.map((a,i)=>{
                return(
                    <div className="button-box" key={i}
                            onMouseEnter={()=>{setMouseIndex(i); console.log(mouseIndex)}} 
                            onMouseLeave={()=>{setMouseIndex(''); console.log(mouseIndex)}}>
                        <div className="button-cover">
                            <img src={`${buttonContent.data[i].img}`}/>
                            <video className='button-video' style={videoStyle(i)} loop autoPlay muted>
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


