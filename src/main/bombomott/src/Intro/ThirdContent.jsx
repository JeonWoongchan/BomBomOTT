import React from 'react';
import './css/firstContent.css'
import hotContentList from './hotContent.json'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function ThirdContent() {
    return (
        <div className='hotContent'>
            <h1>오리지널 콘텐츠</h1>
            <div className="img-area">
            {
                hotContentList.list.map((a,i)=>{
                    return(
                        <img src={hotContentList.list[i].url} key={i}/>
                    )
                })
            }
            </div>
        </div>
    );
}
