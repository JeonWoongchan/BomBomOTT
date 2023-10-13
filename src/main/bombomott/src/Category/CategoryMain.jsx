import React from 'react';
import CategoryBox from './CategoryBox';
import GenreApi from '../GenreApi'

import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function CategoryMain(props) {
    const {mediaType, categoryType} = useParams()
    GenreApi(mediaType, categoryType);
    // 할일
    // 페이지 크기에 따라 이미지 개수 조절
    // 페이지 스크롤 내리면 이미지 개수 추가
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

