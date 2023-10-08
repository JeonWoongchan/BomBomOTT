import React from 'react';
import './header.css'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { useLocation } from 'react-router-dom';

export default function Header(props) {
    const location = useLocation();
    const [profileOn, setProfileOn] = useState(false);

    const activeProfileStyle = (i) => {
        if(i == 0){
            return{
                height: profileOn == true ? '280px' : '70px',
                backgroundColor: props.contentScroll > 5 ? 'transparent' : null,
                backgroundColor: profileOn == true ? 'rgb(4, 7, 20)' : null,
                border : profileOn == true ? 'solid 0.5px white' : 'none',
                transition: 'all 0.2s',
            }
        }else if(i == 1){
            return{
                opacity: profileOn == true ? 1 : 0, 
                transition: 'opacity 0.2s', 
            }
        }
    }

    const NavBarStyle = () => { // props를 매개변수로 추가
        if (window.location.pathname.startsWith('/content')) {
            return {
            backgroundColor: props.contentScroll > 5 ? null : 'transparent'
            };
        }
    };

    return (
        <div className='main-header'>
            {/* 상단바 */}
            <Navbar className='main-Navbar' style={NavBarStyle()}>
                <Container>
                    <Navbar.Brand className="header-buttons">
                        <img className='header-logo' src='/img/disney_Plus_logo.png'/>
                        <NavMenu icon='home' menu='홈' link=''/>
                        <NavMenu icon='search' menu='검색' link=''/>
                        <NavMenu icon='list' menu='카테고리' link=''/>
                        <NavMenu icon='add' menu='관심 콘텐츠' link=''/>
                        <NavMenu icon='forum' menu='커뮤니티' link=''/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text>
                        <div className="active-profile" 
                            onMouseOver={()=>{setProfileOn(true)}} onMouseLeave={()=>{setProfileOn(false)}}
                            style={activeProfileStyle(0)}>
                            <div className="profile">
                                <span>내 프로필</span>
                                <img className='header-logo' src='/img/icon-woman.png'/>
                            </div>
                            <div className='hide-profile-menu' style={activeProfileStyle(1)}>
                                <div className='profile-line'></div>
                                <h4>프로필 수정</h4>
                                <span>계정 정보</span>
                                <span>저장한 콘텐츠</span>
                                <span>고객센터</span>
                                <span>로그아웃</span>
                            </div>  
                        </div>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

function NavMenu({icon, menu, link}){
    return(
        <a className='header-icon' href={link}>
            <span className="material-symbols-outlined">{icon}</span>
            <p>{menu}</p>
        </a>
    )
}

