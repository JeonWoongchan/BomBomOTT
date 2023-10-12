import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import Intro from './Intro/Intro'
import Main from './Main/Main'
import Content from './Content/Content'
import BrandContent from './BrandContent/BrandContent'
import useApi from './useApi';

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom';
import MainBoard from "./board/MainBoard";
import Detail from "./board/Detail";
import CreateBoard from "./board/CreateBoard";
import UpdateBoard from "./board/UpdateBoard";

function App() {

    return (
        <div className="App container">
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/main' element={<Main/>}/>
                <Route path='/main-board' element={<MainBoard/>}/>
                <Route path="/detail" element={<Detail/>} />
                <Route path="/create-board" element={<CreateBoard/>} />
                <Route path="/update-board" element={<UpdateBoard/>} />
            </Routes>
        </div>
    );
}

export default App;
