import { useState, useEffect } from 'react';

function useContentSlide(){
    const slideStyle = () => {
        return{
            transition: moveOn === true ? 'all 0.5s ease-in-out' : 'all ease-in-out', 
            transform: `translateX(${moveX}vw)`
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
    const [moveX, setMoveX] = useState(-0.1)
    const [click, setClick] = useState(false);
    const [moveOn, setMoveOn] = useState(false)// 다시 돌아오게 할건지 여부
    const [num, setNum] = useState(0); // 박스의 위치
    
    useEffect(()=>{
        console.log(startX, endX)
        if(click == false){
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
            setMoveX(-0.1)
        }else if(num == 1){
            setMoveX(-92.45)        
        }else if(num == 2){
            setMoveX(-183.95)
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
            setLastX(e.clientX - currentX)
            setCurrentX(e.clientX); // 마우스 움직일때도 startX 업데이트해줘서 부드럽게 이동하도록 함
            setMoveX(moveX + (lastX / window.innerWidth) * 100) // 이동한 위치에서 추가로 lastX만큼 이동하도록 moveX 이용
        }
    }
    
    const slideMouseUp = (e) => {
        // 마우스 뗏을때 슬라이드가 양끝 넘어가면 다시 슬라이드 복구시킴
        setEndX(e.clientX)
        setClick(false)
        if(moveX > -0.1){
            setMoveOn(true)
            setMoveX(-0.1)
            setTimeout(()=>{
                setMoveOn(false)
            }, 300)
        }else if(moveX < -185){
            setMoveOn(true)
            setMoveX(-185)
            setTimeout(()=>{
                setMoveOn(false)
            }, 300)
        }
        console.log(moveX)
    }
    return {
        moveX,
        num,
        slideMouseDown,
        slideMouseMove,
        slideMouseUp,
    };
}
