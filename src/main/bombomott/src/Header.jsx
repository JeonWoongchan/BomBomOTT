import React from 'react';
import './header.css'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [profileOn, setProfileOn] = useState(false);
    const userId = 'userId';
    
    const activeProfileStyle = (i) => {
        if(i == 0){
            return{
                height: profileOn == true ? '340px' : '70px',
                backgroundColor: props.contentScroll > 5 ? 'transparent' : null,
                backgroundColor: profileOn == true ? 'rgb(19, 19, 19)' : null,
                outline : profileOn == true ? '0.5px solid #acacac' : 'none',
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
            return {
                backgroundColor: props.contentScroll > 5 ? null : 'transparent'
            };
    };

    return (
        <div className='main-header'>
            {/* 상단바 */}
            <Navbar className='main-Navbar' style={NavBarStyle()}>
                <Container>
                    <Navbar.Brand className="header-buttons">
                        <img className='header-logo' src='/img/disney_Plus_logo.png'/>
                        <NavMenu icon='home' menu='홈' link='/main'/>
                        <NavMenu icon='search' menu='검색' link=''/>
                        <NavMenu icon='add' menu='관심 콘텐츠' link=''/>
                        <NavMenu icon='movie' menu='영화' link='/category/movie/recommend'/>
                        <NavMenu icon='tv_gen' menu='시리즈' link='/category/series/recommend'/>
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
                                <div className='modify-profile' onClick={()=>{ navigate(`/profile/${userId}/edit-profile`)}}>
                                    <span className="material-symbols-outlined icon">add_circle</span>
                                    <h6>프로필 추가</h6>
                                </div>
                                <div onClick={()=>{ navigate(`/profile/${userId}/edit-profile`)}}>
                                    <span>프로필 수정</span>
                                </div>
                                <div onClick={()=>{ navigate(`/profile/${userId}/account`)}}>
                                    <span >계정</span>
                                </div>
                                <div onClick={()=>{ navigate(`/help`)}}>
                                    <span>고객센터</span>
                                </div>
                                <div onClick={()=>{ navigate(``)}}>
                                    <span>로그아웃</span>
                                </div>
                            </div>  
                        </div>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

function NavMenu({icon, menu, link}){
    const navigate = useNavigate();
    return(
        <a className='header-icon' onClick={()=>{ navigate(`${link}`)}}>
            <span className="material-symbols-outlined">{icon}</span>
            <p>{menu}</p>
        </a>
    )
}

