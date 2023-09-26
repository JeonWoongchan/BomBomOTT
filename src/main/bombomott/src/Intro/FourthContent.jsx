import React from 'react';
import './css/fourthContent.css'
import questionList from './questionList.json'

import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function FourthContent() {
    return (
        <div className='questionContent'>
            <h1 className='question-title'>자주 묻는 질문</h1>
            <AnswerBox/>
        </div>
    );
}

function AnswerBox(){
    const [boxSelector, setBoxSelector] = useState([]);
    const boxClass = ['question-box'];

    useEffect(()=>{
        let arr = new Array(questionList.question.length).fill(0)
        setBoxSelector(arr)
    },[])

    const boxHandler = (i) => {
        let copy = [...boxSelector]
        if(boxSelector[i] == 0){
            copy[i] = 1;
            setBoxSelector(copy)
            console.log(boxSelector)
        }else{
            copy[i] = 0;
            setBoxSelector(copy)
            console.log(boxSelector)
        }
    }

    const boxStyle = (i) => {
        return {
        height: boxSelector[i] === 1 ? 'auto' : '75px',
        transition: 'height 1s', // height 속성에 애니메이션 효과 추가
    };
    }

    return(
        questionList.question.map((a,i)=>{
            return(
                <button className={boxSelector[i] == 1 ?  'question-box fadeInDown' : 'question-box'} key={i} onClick={()=>{boxHandler(i)}} style={boxStyle(i)}>
                    <span className={boxSelector[i] == 1 ?  'question-text fadeInDown' : 'question-text'}>{questionList.question[i].title}
                        { boxSelector[i] == 1 ? <p className='question-detail'>{questionList.question[i].detail}</p> : null }
                        {
                            boxSelector[i] == 0 ? <span className='box-icon'>➕</span> : <span className='box-icon'>➖</span>
                        }
                    </span>
                    
                </button>
            )
        })
    )
}
