import React from 'react';
import './css/header.css'
import './css/headerSlide.css'
import HeaderSlide from './HeaderSlide';
import HeaderSlideImg from './slideImage.json'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function Header(props) {
    const [navBar, setNevBar] = useState(false);
    const [slide, setSlide] = useState('https://www.themoviedb.org/t/p/original/8HZT9JXCprrXjf77Yjh6VTIiEor.jpg');
    const [slideButton, setSlideButton] = useState(['slide-buttonOn', 'slide-buttonOff', 'slide-buttonOff', 'slide-buttonOff']);
    const [slideTitle, setSlideTitle] = useState('');


    useEffect(()=>{ //슬라이드 버튼 클릭시 이미지 변경
        let copy = [...slideButton]
        let index = copy.findIndex((e) => e == 'slide-buttonOn')
        setSlide(HeaderSlideImg.images[index].url)
        setSlideTitle(HeaderSlideImg.images[index].title)
        
    },[slideButton])

    const slideHandler = (e)=>{ // 슬라이드 버튼 변경
        let id = e.slice(-1)
        let copy = [...slideButton]
        let index = copy.findIndex((e) => e == 'slide-buttonOn')

        copy[index] = 'slide-buttonOff'
        copy[id] = 'slide-buttonOn'
        setSlideButton(copy);
    }

    useEffect(()=>{ // 헤더컨텐츠 이미지 자동변경
        const timer = setInterval(()=>{
            let copy = [...slideButton];
            let index = copy.findIndex((e) => e == 'slide-buttonOn')
            copy[index] = 'slide-buttonOff'
            copy[index+1] == null ? copy[0] = 'slide-buttonOn' : copy[index+1] = 'slide-buttonOn'
            setSlideButton(copy)
        }, 5000)
        return () => {
            clearInterval(timer);
        };
    })

    return (
        <div className='header'>
            {/* 상단바 */}
            <button className="header-login-btn">로그인</button> 
            <Navbar className={`intro-Navbar ${props.scroll>450 ? 'show-Navbar' : ''}`} style={{top: '0'}}>
                <Container>
                    <Navbar.Brand href="#home" className='header-logo'>
                        <img className='header-logo' src='/img/disney_Plus_logo.png'/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className={`${props.scroll<=450 ? 'show-Navbar' : ''}`}>
                        <button className="header-signup-btn">지금 가입</button>
                        <button className="header-login-btn">로그인</button> 
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* 이미지 슬라이드 컨텐츠 */}
            <div className="header-content" style={{ backgroundImage : `url(${slide})`}}>
                <div className="content-box">
                    <img className='content-logo' src='/img/disney_Plus_logo.png'/>
                    <h3>이 모든 이야기가 여기에 지금 스트리밍 중</h3>
                    <div className="subBox-area">
                        <div className="subBox1">
                            <h5>월 9,900원 <span style={{fontSize:'15px', color:'gray'}}>| (부가세 포함)</span></h5>
                            <Button className='subBox-button' variant="primary">월간 구독</Button>
                        </div>
                        <div className="subBox2">
                            <h5>연 99,000원 <span style={{fontSize:'15px', color:'gray'}}>| (부가세 포함)</span></h5>
                            <h6>최대 16% 할인된 가격</h6>
                            <Button className='subBox-button' variant="primary">연간 구독하고 할인받기</Button>
                        </div>
                    </div> 
                </div>
                <HeaderSlide slideTitle={slideTitle} slideButton={slideButton} HeaderSlideImg={HeaderSlideImg} slide={slide} slideHandler={slideHandler}></HeaderSlide>
            </div>
        </div>
    );
}

