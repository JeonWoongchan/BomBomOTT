import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import ContentDetail from './ContentDetail'
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';
import './css/content.css'

import axios from "axios";
import { useEffect, useState } from "react";
import { avbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

//타이틀 이미지, 관람등급 이미지, 제작자 및 출연자 정보 임의로 제작
function Content(props) {
    const scroll = useScroll();  
    const location = useLocation();
    const receivedData = {...location.state.data};
    const receivedDataAll = {...location.state.dataAll};
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    
    const contentBackground = ()=>{
        return{
            backgroundImage : `url(${BASE_URL}${receivedData.backdrop_path})`,
            overflow : 'hidden'
        }
    }
    return (
        <div className="contentPage-container" style={contentBackground()}>
            <Header contentScroll={scroll}/>
            <ContentDetail receivedData={receivedData} receivedDataAll={receivedDataAll}/>
            <Footer/>
            <ToTop/>
        </div>
    );
}

export default Content;
