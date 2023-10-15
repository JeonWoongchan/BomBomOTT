import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import Intro from './Intro/Intro'
import Main from './Main/Main'
import Content from './Content/Content'
import BrandContent from './BrandContent/BrandContent'
import Category from './Category/Category'
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
                <Route path='/content/:contentType/:contentGenre/:contentId' element={<Content/>}/>
                <Route path='/brand/:brandName' element={<BrandContent/>}/>
                <Route path='/category/:mediaType/:categoryType' element={<Category/>}/>
            </Routes>
        </div>
    );
}

export default App;
