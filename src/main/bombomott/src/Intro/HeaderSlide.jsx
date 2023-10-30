import React from 'react';
import './css/headerSlide.css'
import play from './playButton.png'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function HeaderSlide(props) {

    return (
        <div className="header-slide-area">
            {
                props.HeaderSlideImg.images.map((a,i)=>{
                    return(
                        <button key={i} className={`${props.slideButton[i]}`} id={`slideBtn${i}`} onClick={(e)=>{props.slideHandler(e.target.id)}}></button>
                    )
                })
            }
            <p className='slideTitle'>{props.slideTitle}</p>
            {/* <div className="slidePlayButton"><img src={play}/></div> */}
        </div>
    );
}
