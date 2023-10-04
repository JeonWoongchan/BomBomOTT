import React, { useEffect, useState } from 'react';
import slideImg from './slideImage.json'
import buttonContent from './buttonContent.json'
import './css/buttonContainer.css'

export default function ButtonContainer() {
    const [mouseIndex, setMouseIndex] = useState('')
    const [isPlaying, setIsPlaying] = useState('autoPlay');

    const buttonStyle = (a,i)=>{
        if(a == 'box'){
            return{
                outline: mouseIndex === i ? '3px solid white' : 'none',
                scale: mouseIndex === i ? '1.09' : 'none',
                transition: 'all 0.3s ease-in-out'
            }
        }else if(a == 'cover'){
            return{
                
            }
        }else if(a == 'video'){
            return{
                display: mouseIndex === i ? 'block' : 'none',
                scale: mouseIndex === i ? '1.01' : 'none',
                transition: 'all 0.3s ease-in-out'
            }
        }
    }

    return (
        <div className='button-area'>
            <div className="button-container">
            {
            buttonContent.data.map((a,i)=>{
                return(
                    <div className="button-box" key={i} style={buttonStyle('box', i)}
                            onMouseEnter={()=>{setMouseIndex(i)}} 
                            onMouseLeave={()=>{setMouseIndex('')}}>
                        <div className="button-cover" style={buttonStyle('cover', i)}>
                            <img src={`${buttonContent.data[i].img}`}/>
                            <video className='button-video' style={buttonStyle('video', i)} loop autoPlay muted>
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


