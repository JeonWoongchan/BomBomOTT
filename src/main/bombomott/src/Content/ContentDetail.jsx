import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contentDetail.css'
import useScroll from '../useScroll';

import axios from "axios";
import { useEffect, useState } from "react";
import { avbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';


function ContentDetail(props) {
    const scroll = useScroll();  
    return (
        <div className='content-detail'>
            
        </div>
    );
}

export default ContentDetail;
