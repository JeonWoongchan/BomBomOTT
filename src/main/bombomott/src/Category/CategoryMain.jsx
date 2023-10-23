import React from 'react';
import CategoryBox from './CategoryBox';
import GenreApi from '../GenreApi'
import useScroll from '../useScroll'

import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function CategoryMain(props) {
    const {mediaType, categoryType} = useParams()
    const [page, setPage] = useState(1);
    const media = mediaType == 'movie' ? 'movie' : 'tv'
    const scroll = useScroll();
    const isLoading = useSelector((state)=>state.isLoading)
    GenreApi(media, categoryType, page);

    // 페이지 크기에 따라 이미지 개수 조절 -> css @media screen and (max-width: ~~~px)
    // 페이지 스크롤 내리면 이미지 개수 추가 -> 스크롤 내릴때마다 page 1증가 -> 원래있던 데이터에 새로운 page 데이터 추가

    useEffect(()=>{
        if(scroll+window.innerHeight +5 >= document.documentElement.scrollHeight
            && categoryType !== 'recommend' && !isLoading){//스크롤 끝까지 내렸을때
            setPage((prev)=>prev+1)
        }
    },[scroll])

    useEffect(()=>{
        window.scrollTo(0, 0);
        setPage(1);
    },[mediaType, categoryType])

    return (
        <div id='categoryMain'>
            <div id="category_main_content">
                <div className="category-background-section"></div>
                <main className='category-main-section'>
                    <CategoryBox/>
                </main>
            </div>
        </div>
    );
}

