import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import ContentDetail from './ContentDetail'
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';
import DetailApi from '../DetailApi'
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

    const {contentType, contentId} = useParams()
    const mediaType = contentType == 'series' ? 'tv' : contentType
    const contentDetail = useSelector((state)=>state.contentDetail)
    DetailApi(mediaType, contentId)

    const imageStyle = ()=>{
        return{
            opacity : scroll < 350 ? -(5/3000)*scroll + 0.8 : 0.3
        }
    }
    
    return (
        contentDetail && Object.keys(contentDetail).length !=0 ?
        <div className="contentPage-container">
            <Header contentScroll={scroll}/>
            <div className="content-background" style={imageStyle()}>
                <img src={`${BASE_URL}${receivedData.backdrop_path}`}/>
            </div>
            <ContentDetail receivedData={receivedData} receivedDataAll={receivedDataAll}/>
            <Footer/>
            <ToTop/>
        </div> : <h1>Now Loading...</h1>
    );
}

export default Content;
