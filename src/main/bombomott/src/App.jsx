import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Intro from "./Intro/Intro";
import Main from "./Main/Main";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import Content from "./Content/Content";
import BrandContent from "./BrandContent/BrandContent";
import Category from "./Category/Category";
import Interest from "./Interest/Interest";
import BoardMain from './Board/BoardMain'
import Logout from "./Logout";
import useApi from "./useApi";

import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import Search from "./Search/Search";
import ContentModal from "./Content/ContentModal";

function App() {
    const navigate = useNavigate()
    useApi();
    //처음 실행시 세션 유무 확인
    // 세션있으면 프로필 선택화면
    // 세션없으면 인트로 페이지

    return (
        <div className="App container">
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/login/:loginStep' element={<Login/>}/>
                <Route path='/login/:userId/:loginStep' element={<Login/>}/>
                <Route path='/profile/:userId/:nowProfileCode/:profileMenu' element={<Profile/>}>
                    <Route path=":profileSubMenu" element={<Profile/>}/>
                </Route>
                <Route path='/profile/:profileMenu' element={<Profile/>}>
                    <Route path=":profileSubMenu" element={<Profile/>}/>
                </Route>
                <Route path='/profile/:profileMenu' element={<Profile/>}></Route>
                {/* <Route path='/content/:nowProfileCode/:contentType/:contentGenre/:contentId' element={<Content/>}/> */}
                <Route path='/content/:contentType/:contentGenre/:contentId' element={<Content/>}/>
                <Route path='/brand/:brandName' element={<BrandContent/>}/>
                <Route path="/search" element={<Search />} />
                <Route path='/category/:mediaType/:categoryType' element={<Category/>}/>
                <Route path='/interest' element={<Interest/>}/>
                <Route path="/board" element={<BoardMain />} />
                <Route path="/board/:content" element={<BoardMain type="content" />} />
                <Route path="/board/write" element={<BoardMain type="write" />} />
                <Route path="/logout" element={<Logout/>} />
            </Routes>
        </div>
    );
}

export default App;
