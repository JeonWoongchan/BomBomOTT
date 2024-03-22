import React from 'react';
import axios from 'axios';
import './css/header.css'
import './css/headerSlide.css'
import HeaderSlide from './HeaderSlide';
import HeaderSlideImg from './slideImage.json'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const navigate = useNavigate()
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

    const [isSesstion, setIsSesstion] = useState(false)
    useEffect(()=>{
        localStorage.clear()
        axios
            .post("http://localhost:8080/intro", {
            
            })
            .then((res) => {
                console.log(res.data)
                if(res.data.status == 1 ){ 
                    setIsSesstion(true)
                }else if(res.data.status == 0){ 
                    setIsSesstion(false)
                }
        })
        .catch((error)=>{
            console.log(error)
        });
    },[])

    return (
        <div className='header'>
            {/* 상단바 */}
            {
                isSesstion ? <button className="header-login-btn" type='button' onClick={()=>{navigate('/login/select-profile')}}>메인으로</button> 
                : <button className="header-login-btn" type='button' onClick={()=>{navigate('/login/enter-email')}}>로그인</button> 
            }
            <Navbar className={`intro-Navbar ${props.scroll>450 ? 'show-Navbar' : ''}`} style={{top: '0'}}>
                <Container>
                    <Navbar.Brand href="" className='header-logo'>
                        <img className='header-logo' src='/img/bombom_logo.png'/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className={`${props.scroll<=450 ? 'show-Navbar' : ''}`}>
                        {
                            props.scroll>450 ?
                            <>
                                
                                {
                                    isSesstion ? <button className="header-login-btn" type='button' onClick={()=>{navigate('/login/select-profile')}}>메인으로</button> 
                                    :
                                    <>
                                        <button className="header-signup-btn" type='button' onClick={()=>{navigate('/login/enter-email')}}>지금 가입</button> 
                                        <button className="header-login-btn" type='button' onClick={()=>{navigate('/login/enter-email')}}>로그인</button> 
                                    </>
                                }
                            </>: null
                        }
                        
                    </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {/* 이미지 슬라이드 컨텐츠 */}
            <div className="header-content" style={{ backgroundImage : `url(${slide})`}}>
                <div className="content-box">
                    <img className='content-logo' src='/img/bombom_logo.png'/>
                    <h3>이 모든 이야기가 여기에 지금 스트리밍 중</h3>
                    <div className="subBox-area">
                        <div className="subBox1">
                            <h5>월 9,900원 <span style={{fontSize:'15px', color:'gray'}}>| (부가세 포함)</span></h5>
                            <Button className='subBox-button' variant="primary" type='button' onClick={()=>{navigate('/login/enter-email')}}>월간 구독</Button>
                        </div>
                        <div className="subBox2">
                            <h5>연 99,000원 <span style={{fontSize:'15px', color:'gray'}}>| (부가세 포함)</span></h5>
                            <h6>최대 16% 할인된 가격</h6>
                            <Button className='subBox-button' variant="primary" type='button' onClick={()=>{navigate('/login/enter-email')}}>연간 구독하고 할인받기</Button>
                        </div>
                    </div> 
                </div>
                <HeaderSlide slideTitle={slideTitle} slideButton={slideButton} HeaderSlideImg={HeaderSlideImg} slide={slide} slideHandler={slideHandler}></HeaderSlide>
            </div>
        </div>
    );
}

