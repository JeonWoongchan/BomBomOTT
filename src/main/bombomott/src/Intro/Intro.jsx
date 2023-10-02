import 'bootstrap/dist/css/bootstrap.min.css';
import './css/intro.css';
import './css/header.css'
import './css/headerSlide.css'
import Header from './Header';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent'
import ThirdContent from './ThirdContent'
import FourthContent from './FourthContent'
import useScroll from '../useScroll';

import axios from "axios";
import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setTrendMovies } from '../store/store';

function Intro() {
    const [data, setData] = useState([]);
    const trendMovies = useSelector((state) => state.trendMovies)
    const scroll = useScroll();  
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    let dispatch = useDispatch();

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const options = {
        method: 'GET',
        url: 'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
        }
    };
    
    useEffect(()=>{
        axios.request(options).then(function (response) {
            dispatch(setTrendMovies(response.data.results))
        }).catch(function (error) {
            console.error(error);
        });
    },[])

    return (
        <div className="App container">
            {/* {data.map((v,idx)=><li key={`${idx}-${v}`}>{v}</li>)} 데이터연동 확인*/}
            <Header scroll={scroll}/>
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
            <div className='footer'>
                <img className='footer-logo' src='/img/disney_Plus_logo.png'/>
                <p>월트디즈니컴퍼니코리아 유한책임회사 | 대표자: 김소연 | 서울특별시 강남구 테헤란로 152, 7층 (우편번호: 06236) | Email: help@disneyplus.kr | 연락처: 080 822 1416 | 사업자등록번호: 220-81-03347 | 통신판매업 신고번호: 제2021-서울강남-05456호 |
                    비디오물배급업 신고번호: 제2016-16호 | 호스팅서비스 사업자: NSOne</p>
                <p>디즈니+의 콘텐츠는 서비스 여부에 따라 달라질 수 있습니다.
                    © 2023 Disney and its related entities. All Rights Reserved.</p>
            </div>
            <button className='toTop' onClick={MoveToTop}>⬆</button>
        </div>
    );
}

export default Intro;
