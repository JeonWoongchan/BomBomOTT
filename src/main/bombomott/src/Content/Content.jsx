import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../Header';
import ContentDetail from './ContentDetail'
import Footer from '../Footer';
import ToTop from '../ToTop';
import useScroll from '../useScroll';

import axios from "axios";
import { useEffect, useState } from "react";
import { avbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';

function Content(props) {
    const scroll = useScroll();  
    const location = useLocation();
    const receivedData = location.state;
    console.log(receivedData)

    return (
        <div className="App container">
            <Header/>
            <div className='content'>
                <ContentDetail receivedData={receivedData}/>
            </div>
            <Footer/>
            <ToTop/>
        </div>
    );
}

export default Content;
