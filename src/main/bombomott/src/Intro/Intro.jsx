import 'bootstrap/dist/css/bootstrap.min.css';
import './css/intro.css';
import './css/header.css'
import './css/headerSlide.css'
import Header from './Header';
import FirstContent from './FirstContent';
import SecondContent from './SecondContent'
import ThirdContent from './ThirdContent'
import FourthContent from './FourthContent'

import axios from "axios";
import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'

function Intro() {
    const [data, setData] = useState([]);
    const [scroll, setScroll] = useState(0);

    useEffect(() => {//스크롤 이벤트 : 타이머로 성능개선
        const timer = setInterval(() => {
            window.addEventListener("scroll", handleScroll);
        }, 10);
        return () => {
            clearInterval(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [scroll]);
    
    const handleScroll = () => {
        setScroll(window.scrollY)
        console.log(scroll);
    };

    const MoveToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

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
