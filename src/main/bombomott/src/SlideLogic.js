import './Main/css/mainContent.css'
import borderStyle from './Main/borderStyle';
import slideTitle from './Main/slideTitle.json'
import './contentSlide.css'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setIsDragging } from './store/store';

function SlideLogic(data){
    const itemCount = data; // 슬라이드 아이템 개수 계산
    const MaxNum = itemCount%4 == 0 ? itemCount/4-1 : Math.floor(itemCount/4)
    const MaxPosition = MaxNum == 0 ? 0 : (-91 * (MaxNum));
    const isDragging = useSelector((state)=>state.isDragging)
    const dispatch = useDispatch();

    const [currentX, setCurrentX] = useState(0);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [lastX, setLastX] = useState(0);
    const [position, setPosition] = useState(0)
    const [click, setClick] = useState(false)
    const [moveOn, setMoveOn] = useState(false)// 다시 돌아오게 할건지 여부
    const [num, setNum] = useState(0); // 박스의 위치
    // console.log(num,itemCount,MaxNum,MaxPosition)

    //startX 기준으로 lastX까지 움직인 거리만큼 컴포넌트를 이동시킴
    //한번 이동한 후에 좌표를 저장해야됨
    //다시 이동할땐 처음 좌표에서 다시 이동한 거리만큼 이동시켜야됨
    useEffect(()=>{ // 마우스 떼었을때
        if(!isDragging){
            if(startX-endX > 400 && num != MaxNum){ // 오른쪽이동
                setNum(num+1)
            }else if(startX-endX < -400 && num != 0){ // 왼쪽이동
                setNum(num-1)
            }else{
                setNum(num)
            }
        }
        setMoveOn(true)
    }, [endX])

    useEffect(()=>{ 
        setPosition(-91*num)
        setTimeout(()=>{
            setMoveOn(false)
        }, 300)
    },[moveOn])

    const slideMouseDown = (e) => {
        setCurrentX(e.clientX); setStartX(e.clientX); setClick(true);
    }

    const slideMouseMove = (e) => {
        if(click == true){
            dispatch(setIsDragging(true))
        }
        if(isDragging){
            setLastX(e.clientX - currentX)
            setCurrentX(e.clientX); // 마우스 움직일때도 startX 업데이트해줘서 부드럽게 이동하도록 함
            setPosition((prevPosition) => prevPosition + (lastX / window.innerWidth) * 100) // 이동한 위치에서 추가로 lastX만큼 이동하도록 position 이용
        }
    }

    const slideMouseUp = (e) => {
        // 마우스 뗏을때 슬라이드가 양끝 넘어가면 다시 슬라이드 복구시킴
        setEndX(e.clientX)
        setClick(false)
        dispatch(setIsDragging(false))
        if(position > 0){
            positionBack(0)
        }else if(position < MaxPosition){
            positionBack(MaxPosition)
        }
    }

    const positionBack = (pos)=>{ //position 슬라이드 드래그 이전으로
        setMoveOn(true)
        setPosition(pos)
        setTimeout(()=>{
            setMoveOn(false)
        }, 300)
    }

    //스타일
    const slideStyle = () => {
        return{
            transition: moveOn === true ? 'all 0.5s ease-in-out' : 'all ease-in-out', 
            transform: `translateX(${position}vw)`
        }
    }

    const boxStyle = (i) => {
        return{
            opacity : num === Math.floor(i / 4) ? 1 : 0.3,
            transition: `opacity 0.2s`
        }
    }
    return {
        slideMouseDown,
        slideMouseMove,
        slideMouseUp,
        slideStyle,
        boxStyle,
    };
}

export default SlideLogic;