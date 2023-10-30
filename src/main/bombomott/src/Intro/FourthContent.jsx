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
    const [boxSelector, setBoxSelector] = useState([]);//어떤 질문 선택했는지

    useEffect(()=>{
        let arr = new Array(questionList.question.length).fill(0) //처음 랜더링시 질문 개수만큼 배열 생성
        setBoxSelector(arr) // 배열을 state에 넣음
    },[])

    const boxHandler = (i) => {
        let copy = [...boxSelector]
        if(boxSelector[i] == 0){ //0일경우 펼치지지 않은 질문 -> 해당 질문 인덱스를 1로 바꿈 -> boxStyle에서 1인것 높이 변함
            copy[i] = 1;
            setBoxSelector(copy)
            console.log(boxSelector)
        }else{ // 다시 누르면 0으로 변하고 높이 원래대로 변함
            copy[i] = 0;
            setBoxSelector(copy)
            console.log(boxSelector)
        }
    }

    const boxStyle = (i) => {
        return {
            height: boxSelector[i] === 1 ? 'auto' : '75px', // 질문의 인덱스가 1인것 높이 조정
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
