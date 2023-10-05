import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';

import axios from "axios";
import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';


function Intro() {
    const scroll = useScroll();  

    return (
        <div className="App container">
            <Header/>
            <div className='content'>
                
            </div>
            <div className='content'>
                
            </div>
            <div className='content'>
                
            </div>
            <div className='content'>
                
            </div>
            <Footer/>
            <ToTop/>
        </div>
    );
}

export default Intro;
