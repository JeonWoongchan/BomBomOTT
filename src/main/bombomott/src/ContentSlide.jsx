import './Main/css/mainContent.css'
import borderStyle from './Main/borderStyle';
import slideTitle from './Main/slideTitle.json'

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

function ContentSlide(props){
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'
    const [mouseIndex, setMouseIndex] = useState('')
    const navigate = useNavigate()

    const slideStyle = () => {
        return{
            transition: moveOn === true ? 'all 0.5s ease-in-out' : 'all ease-in-out', 
            transform: `translateX(${position}vw)`
        }
    }

    const boxStyle = (i) => {
        return{
            opacity : num === Math.floor(i / 5) ? 1 : 0.3,
            transition: `opacity 0.2s`
        }
    }

    //startX 기준으로 lastX까지 움직인 거리만큼 컴포넌트를 이동시킴
    //한번 이동한 후에 좌표를 저장해야됨
    //다시 이동할땐 처음 좌표에서 다시 이동한 거리만큼 이동시켜야됨

    const [currentX, setCurrentX] = useState(0);
    const [startX, setStartX] = useState(0);
    const [endX, setEndX] = useState(0);
    const [lastX, setLastX] = useState(0);
    const [position, setPosition] = useState(-0.1)
    const [isDragging, setIsDragging] = useState(false);
    const [click, setClick] = useState(false)
    const [moveOn, setMoveOn] = useState(false)// 다시 돌아오게 할건지 여부
    const [num, setNum] = useState(0); // 박스의 위치

    useEffect(()=>{ // 마우스 떼었을때
        console.log(startX, endX)
        if(!isDragging){
            if(startX-endX > 400 && num != 2){ // 오른쪽이동
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
        if(num == 0){
            setPosition(-0.1)
        }else if(num == 1){
            setPosition(-92.45)        
        }else if(num == 2){
            setPosition(-183.95)
        }
        setTimeout(()=>{
            setMoveOn(false)
        }, 300)
    },[moveOn])

    const slideMouseDown = (e) => {
        setCurrentX(e.clientX); setStartX(e.clientX); setClick(true);
    }

    const slideMouseMove = (e) => {
        if(click == true){
            setIsDragging(true)
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
        setIsDragging(false)
        if(position > -0.1){
            positionBack(-0.1)
        }else if(position < -185){
            positionBack(-185)
        }
    }

    const positionBack = (pos)=>{ //position 슬라이드 드래그 이전으로
        setMoveOn(true)
        setPosition(pos)
        setTimeout(()=>{
            setMoveOn(false)
        }, 300)
    }
    return(
        <>
            <div className='content-slide' style={slideStyle()}
                onMouseDown={(e)=>{slideMouseDown(e)}} 
                onMouseMove={(e)=>{slideMouseMove(e)}}
                onMouseUp={(e)=>{slideMouseUp(e)}}>
            
            {
                props.data.slice(0,15).map((a,i)=>{
                    const SendData = props.data[i]
                    return(
                        <div className="slide-box" key={i}
                            style={mouseIndex === i ? { ...boxStyle(i), ...borderStyle('box') } : boxStyle(i)}
                            onMouseEnter={()=>{setMouseIndex(i)}} 
                            onMouseLeave={()=>{setMouseIndex('')}}> 
                            <img src={`${BASE_URL}${props.data[i].backdrop_path}`} 
                                style={isDragging === true ? { pointerEvents: 'none' } : null}
                                draggable="false" onClick={()=>{ navigate(`/content/${a.media_type}/${a.id}`, {state:SendData})}}>
                            </img>
                        </div>
                    )
                })
            }
            </div>
        </>
    )
}

export default ContentSlide