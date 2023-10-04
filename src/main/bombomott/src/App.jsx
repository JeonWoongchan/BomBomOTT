import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import Intro from './Intro/Intro'
import Main from './Main/Main'
import useApi from './useApi';

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {
    useApi();
    return (
        <div className="App container">
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/main' element={<Main/>}/>
            </Routes>
        </div>
    );
}

export default App;
