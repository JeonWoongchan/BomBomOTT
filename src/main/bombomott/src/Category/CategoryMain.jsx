import React from 'react';
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../store/store';

import ContentSlide from '../ContentSlide'
import useScroll from '../useScroll.js';
import ScrollLoading from '../ScrollLoading'
import SlideControll from '../SlideControll'
import LoadingLogic from '../LoadingLogic'
import CategorySelector from './CategorySelector'
import useApi from '../useApi';

export default function CategoryMain(props) {

    return (
        <div id='categoryMain'>
            <div id="category_main_content">
                <div className="category-background-section"></div>
                <main className='category-main-section'>
                    <div className="category-box">
                        <div className="category-title">
                            <h1>영화</h1>
                            <CategorySelector/>
                        </div>
                        <div className="category-content"></div>
                    </div>
                </main>
            </div>
        </div>
    );
}

