import React from 'react';
import './css/categorySelector.css'
import borderStyle from '../borderStyle';
import MovieCategory from '../MovieCategory'
import MovieGenre from '../MovieGenre';
import TVCategory from '../TVCategory';
import TVGenre from '../TVGenre';

import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../store/store';
import { useNavigate, useParams } from 'react-router-dom';

export default function CategorySelector(props) {
    const navigate = useNavigate()
    const {nowProfileCode, mediaType, categoryType} = useParams();

    const [valueListOn, setValueListOn] = useState(false);
    const [mouseIndex, setMouseIndex] = useState('');
    const [selectValue, setSelectValue] = useState('봄봄+ 추천');

    const CategoryArray = mediaType == 'movie' ? MovieCategory: TVCategory;
    const CategoryGenre = mediaType == 'movie' ? MovieGenre: TVGenre;


    useEffect(()=>{
        const found = Object.entries(CategoryGenre).find(([key, value]) => key === categoryType);
        if(categoryType == 'recommend'){
            setSelectValue('봄봄+ 추천')
        }else if(categoryType == 'all'){
            if(mediaType == 'movie'){
                setSelectValue('모든 영화')
            }else{
                setSelectValue('모든 시리즈')
            }
            
        }else{
            setSelectValue(found[1])
        }
    },[categoryType])

    const valueListStyle = ()=>{
        return{
            display : valueListOn ? 'block' : 'none'
        }
    }

    const valueStyle = (a)=>{
        return{
            opacity : a == selectValue ? 1 : 0
        }
    }

    const valueListControl = ()=>{
        if(valueListOn){
            setValueListOn(false)
        }else{
            setValueListOn(true)
        }
    }

    const ControlStyle = ()=>{
        return{
            width:`${selectValue.length*15+60}px`,
            backgroundColor : valueListOn ? 'rgb(14, 15, 22)' : null,
            transition: 'all 0.3s'
        }
    }

    return (
        <div className="category-seletor">
            <div className="cover">
                <div className="box">
                    <div className="value-list-control" onClick={()=>{valueListControl()}} style={ControlStyle()} draggable='false'>
                        <div className="control-value" draggable='false'>{selectValue}</div>
                        <div className="control-button" draggable='false'><span className="material-symbols-outlined">expand_more</span></div>
                    </div>
                    <div className="value-list" style={valueListStyle()}>
                        {CategoryArray.map((a,i) => {
                            const found = a == '봄봄+ 추천' ? 'recommend' 
                                        : a == '모든 영화' ? 'all'
                                        : a == '모든 시리즈' ? 'all'
                                        : Object.entries(CategoryGenre).find(([key, value]) => value === a)[0]
                            return(
                                <div key={i} className="value" style={mouseIndex === i ? borderStyle('list') : null} 
                                    onMouseEnter={()=>{setMouseIndex(i)}} onMouseLeave={()=>{setMouseIndex('')}}
                                    onClick={()=>{valueListControl(); navigate(`/category/${nowProfileCode}/${mediaType}/${found}`)}}>
                                    <span style={valueStyle(a)}>|</span>
                                    <a>{a}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

