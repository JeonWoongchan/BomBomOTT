import React, { useEffect, useState } from 'react';
import './css/mainContent.css'
import { useSelector, useDispatch } from 'react-redux';

function ContentSlide(props){
    const trendMovies = useSelector((state) => state.trendMovies)
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    const length = trendMovies.length;
    const [style, setStyle] = useState({opacity : 1});
    const [mouseOver, setMouseOver] = useState(false);

    useEffect(()=>{
        const timer = setTimeout(()=>{
            setStyle({opacity : 0.3, transition: `opacity 0.4s`})
        },300)
    },[props.num])

    const slideStyle = (i) => {
        let copy = props.num
        if(copy >= length){
            copy = copy - length
        }
        if(copy != i){
            return style
        }else if(mouseOver == true && copy == i){
            return{
                boxShadow: `20px 20px 20px 20px rgba(5, 6, 7, 0.75)`,
                transition : 'all 0.5s'
            }
        }
    }

    //startX 기준으로 lastX까지 움직인 거리만큼 컴포넌트를 이동시킴
    //한번 이동한 후에 좌표를 저장해야됨
    //다시 이동할땐 처음 좌표에서 다시 이동한 거리만큼 이동시켜야됨

    const [startX, setStartX] = useState(0);
    const [lastX, setLastX] = useState(0);
    const [moveX, setMoveX] = useState(0)
    const [click, setClick] = useState(false);
    const [back, setBack] = useState(false)// 다시 돌아오게 할건지 여부

    return(
        <div className='content-slide' onMouseDown={(e)=>{setStartX(e.clientX); console.log(startX); setClick(true);}} 
            onMouseMove={(e)=>{
                if(click == true){
                    setLastX(e.clientX - startX)
                    setMoveX(moveX + lastX) // 이동한 위치에서 추가로 lastX만큼 이동하도록 moveX 이용
                    setStartX(e.clientX); // 마우스 움직일때도 startX 업데이트해줘서 부드럽게 이동하도록 함

                }
            }}
            onMouseUp={(e)=>{ // 마우스 뗏을때 슬라이드가 양끝 넘어가면 다시 슬라이드 복구시킴
                setClick(false)
                if(moveX > 0){
                    setBack(true)
                    setMoveX(0)
                    setTimeout(()=>{
                        setBack(false)
                    }, 300)
                }else if(moveX < -3155){
                    setBack(true)
                    setMoveX(-3155)
                    setTimeout(()=>{
                        setBack(false)
                    }, 300)
                }
            }}
            style={{
                transition: back === true ? 'all 0.5s ease-in-out' : 'all ease-in-out', 
                transform: `translateX(${moveX}px)`
            }}>
        {
            props.data.slice(0,15).map((a,i)=>{
                return(
                    <div className="slide-box" key={i} id={i}> 
                        <img src={`${BASE_URL}${props.data[i].backdrop_path}`} draggable="false" style={slideStyle(i)}
                            onMouseEnter={()=>{setMouseOver(true)}}
                            onMouseLeave={()=>{setMouseOver(false)}}/>
                    </div>
                )
            })
        }
        </div>
        
    )
}

export default ContentSlide