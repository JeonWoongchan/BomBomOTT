import 'bootstrap/dist/css/bootstrap.min.css';
import './css/intro.css';
import './css/header.css'
import './css/headerSlide.css'
import IntroHeader from './IntroHeader';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent'
import ThirdContent from './ThirdContent'
import FourthContent from './FourthContent'
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';
import isLoginCheck from '../isLoginCheck';

import axios from "axios";
import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


function Intro() {
    const navigate = useNavigate()
    const scroll = useScroll();  

    useEffect(()=>{
        if(localStorage.getItem('userId') == null){
            localStorage.clear();
            sessionStorage.clear();
        }  
    },[])
    
    return (
        <div className="App container">
            {/* {data.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)} 데이터연동 확인*/}
            <IntroHeader scroll={scroll}/>
            <div className='content'>
                <FirstContent/>
            </div>
            <div className='content'>
                <SecondContent scroll={scroll}/>
            </div>
            <div className='content'>
                <ThirdContent/>
            </div>
            <div className='content'>
                <FourthContent/>
            </div>
            <Footer/>
            <ToTop/>
        </div>
    );
}

export default Intro;
