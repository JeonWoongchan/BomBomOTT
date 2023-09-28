import React from 'react';
import './css/header.css'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function Header(props) {
    const [profileOn, setProfileOn] = useState(false);

    const activeProfileStyle = (i) => {
        let result = {};
        if(i == 0){
            result={
                height: profileOn == true ? '280px' : '70px', 
                backgrounColor : profileOn == true ? 'black' : 'rgb(4, 7, 20)',
                border : profileOn == true ? 'solid 1px grey' : 'none',
                transition: 'all 0.5s',
            }
        }else if(i == 1){
            result={
                opacity: profileOn == true ? 1 : 0, 
                transition: 'opacity 0.3s', 
            }
        }
        return result;
    }

    return (
        <div className='header'>
            {/* 상단바 */}
            <Navbar className={`main-Navbar`}>
                <Container>
                    <Navbar.Brand href="#home" className="header-buttons">
                        <img className='header-logo' src='/img/disney_Plus_logo.png'/>
                        <NavMenu icon='home' menu='홈'/>
                        <NavMenu icon='search' menu='검색'/>
                        <NavMenu icon='list' menu='카테고리'/>
                        <NavMenu icon='add' menu='관심 콘텐츠'/>
                        <NavMenu icon='forum' menu='커뮤니티'/>
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

function NavMenu({icon, menu}){
    return(
        <span className='header-icon'>
            <span className="material-symbols-outlined">{icon}</span>
            <p>{menu}</p>
        </span>
    )
}

