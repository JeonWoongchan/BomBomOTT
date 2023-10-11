import React from 'react';
import {useEffect, useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { setIsLoading } from '../store/store';

import './css/categorySelector.css'

export default function CategorySelector(props) {
    const [valueListOn, setValueListOn] = useState(false);
    const [value, setValue] = useState('봄봄+ 추천');
    const valueListStyle = ()=>{
        return{
            display : valueListOn ? 'block' : 'none'
        }
    }

    const valueListControl = ()=>{
        if(valueListOn){
            setValueListOn(false)
        }else{
            setValueListOn(true)
        }
    }

    return (
        <div className="category-seletor">
            <div className="cover">
                <div className="box">
                    <div className="value-list-control" onClick={()=>{valueListControl()}}>
                        <div className="control-value">{value}</div>
                        <span class="material-symbols-outlined control-button">expand_more</span>
                    </div>
                    <div className="value-list" style={valueListStyle()}>
                        <div className="value">봄봄+ 추천</div>
                        <div className="value">액션</div>
                        <div className="value">범죄</div>
                        <div className="value">애니메이션</div>
                        <div className="value">코미디</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

