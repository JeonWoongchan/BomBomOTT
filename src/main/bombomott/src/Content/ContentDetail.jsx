import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contentDetail.css'
import useScroll from '../useScroll';
import MovieGenre from '../MovieGenre'
import TVGenre from '../TVGenre'

import axios from "axios";
import { useEffect, useState } from "react";
import { avbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import ContentTab from './ContentTab';


function ContentDetail(props) {
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const Release_date = props.receivedData.release_date;
    const [genre, setGenre] = useState([]);
    const scroll = useScroll();  

    useEffect(()=>{
        const copy = [...genre]
        props.receivedData.genre_ids.forEach((a,i)=>{    
            if(props.receivedData.media_type == 'movie'){
                const found = MovieGenre[a]
                if(found){
                    copy.push(found)
                }
            }else{
                const found = TVGenre[a]
                if(found){
                    copy.push(found)
                }
            }
        })
        setGenre(copy)
    },[MovieGenre, TVGenre])

    const contentBackground = ()=>{
        return{
            backgroundImage : `url(${BASE_URL}${props.receivedData.backdrop_path})`,
            opacity : 0.8
        }
    }
    return (
        <div className="content-container" style={contentBackground()}>
        <div className='content-detail'>
            <div className="content-title">
                {/* {props.receivedData.original_title} */}
                <img src="https://www.themoviedb.org/t/p/original/gC3fmmZbIHaGIsjcjyyuACZSiBZ.png" alt="" />
            </div>
            <div className="content-info-box">
                <div className="info-top">
                    <div className="top1">
                        <img className='img1' src='https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/8B03E101F8D8DA2184622BB0513EA1F2C5BD0B545E1F363A7288B204D8F32EAE/scale?width=240'/>
                        <img className='img2' src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/FD4912EB883B7CCB847EB9C62E1FC853D547CAF7DF940B9086AE35AFAD0848AB/scale?width=240"/>
                        <img className='img3' src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/FAE63AC7AC11C27C949E1856CF188BF09FC20EA52AEA3B65B43C24EEB5F29BFD/scale?width=240"/>
                        <span>{props.receivedData.media_type == 'movie' ? Release_date.slice(0,4) : null}</span>
                    </div>
                    <div className="top2">
                        {genre.join(', ')}
                    </div>
                </div>
                <div className="info-button">
                    <button className='play-button'><img src='/img/playButton.png'/>재생</button>
                    <img className='add-button' src='/img/addButton.png'/>
                </div>
                <div className="info-text">
                    {props.receivedData.overview}
                </div>
            </div>
            <ContentTab/>
        </div>
        </div>
    );
}

export default ContentDetail;
