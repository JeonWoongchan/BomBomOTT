import React from 'react';
import ActiveProfile from './ActiveProfile';
import './header.css'

import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown, Button } from "react-bootstrap";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';

export default function Header(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const {nowProfileCode} = useParams()
    
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
                        <img className='header-logo' src='/img/bombom_logo.png' onClick={()=>{navigate(`/main`)}}/>
                        <NavMenu icon='home' menu='홈' link={`/main`}/>
                        <NavMenu icon='search' menu='검색' link={`/search`}/>
                        <NavMenu icon='add' menu='관심 콘텐츠' link='/interest'/>
                        <NavMenu icon='movie' menu='영화' link={`/category/movie/recommend`}/>
                        <NavMenu icon='tv_gen' menu='시리즈' link={`/category/series/recommend`}/>
                        <NavMenu icon='forum' menu='커뮤니티' link={`/board/${nowProfileCode}`}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Text>
                        <ActiveProfile/>
                    </Navbar.Text>
                </Container>
            </Navbar>
        </div>
    );
}

function NavMenu({ icon, menu, link }) {
  const navigate = useNavigate();
  return (
    <a
      className="header-icon"
      onClick={() => {
        navigate(`${link}`);
      }}
    >
      <span className="material-symbols-outlined">{icon}</span>
      <p>{menu}</p>
    </a>
  );
}
