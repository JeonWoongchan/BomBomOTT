<<<<<<< HEAD
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import axios from "axios";
import Intro from './Intro/Intro'
import Main from './Main/Main'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import {Route, Routes, Link, useNavigate, Outlet} from 'react-router-dom';

function App() {

=======
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import axios from "axios";
import Intro from './Intro/Intro'
import Main from './Main/Main'
import Login from './Login/Login';
import Profile from './Profile/Profile'
import Content from './Content/Content'
import BrandContent from './BrandContent/BrandContent'
import Category from './Category/Category'
import useApi from './useApi';

import { useEffect, useState } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Route, Routes, Link, useNavigate, Outlet } from "react-router-dom";
import Search from "./Search/Search";

function App() {
    useApi();
>>>>>>> 63855bb (ãchagepassword)
    return (
        <div className="App container">
            <Routes>
                <Route path='/' element={<Intro/>}/>
                <Route path='/main' element={<Main/>}/>
<<<<<<< HEAD
=======
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/profile/:userId/:profileMenu' element={<Profile/>}>
                    <Route path=":profileSubMenu" element={<Profile/>}/>
                </Route>
                <Route path='/content/:contentType/:contentGenre/:contentId' element={<Content/>}/>
                <Route path='/brand/:brandName' element={<BrandContent/>}/>
                <Route path="/search" element={<Search />} />
                <Route path='/category/:mediaType/:categoryType' element={<Category/>}/>
>>>>>>> 63855bb (ãchagepassword)
            </Routes>
        </div>
    );
}

export default App;
