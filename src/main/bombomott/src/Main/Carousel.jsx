import React, { useEffect, useState } from 'react';
import slideImg from './slideImage.json'
import SlideBox from './Slidebox'
import './css/carousel.css'

export default function Carousel() {
    const length = slideImg.images.length;

<<<<<<< HEAD
    const [slide, setSlide] = useState(77.5+(length-1)*85)
=======
    const [slide, setSlide] = useState(length*90.5-4.235) // 실제 적용되면 2vw차이남
>>>>>>> 63855bb (ãchagepassword)
    const [num, setNum] = useState(length) // 슬라이드 번호 총 슬라이드 개수 * 3개 : 0부터 11 까지
    const [transition, setTransition] = useState('all 0.3s')

    const moveSlide = (e) => { //슬라이드 이동 버튼
        if(e == 0){
<<<<<<< HEAD
            setSlide(slide-85)
            setNum(num-1)
        }else if(e == 1){
            setSlide(slide+85)
=======
            setSlide(slide-90.5)//박스1개크기 + 박스간격
            setNum(num-1)
        }else if(e == 1){
            setSlide(slide+90.5)
>>>>>>> 63855bb (ãchagepassword)
            setNum(num+1)
        }
    }

<<<<<<< HEAD
    useEffect(()=>{ // 헤더컨텐츠 이미지 자동변경
        const timer = setInterval(()=>{
            setSlide(slide+85)
            setNum(num+1)
        }, 5000)
        return () => {
            clearInterval(timer);
        };
        
    })

    console.log(num)
=======
    // useEffect(()=>{ // 헤더컨텐츠 이미지 자동변경
    //     const timer = setInterval(()=>{
    //         setSlide(slide+90.5)
    //         setNum(num+1)
    //     }, 5000)
    //     return () => {
    //         clearInterval(timer);
    //     };
        
    // })
>>>>>>> 63855bb (ãchagepassword)
    useEffect(()=>{ 
        const timer = setTimeout(()=>{
            if(num >= length*2-2){ // 마지막에서 두번째 칸이면 박스 개수만큼 왼쪽으로 이동
                setTransition(''); // 애니메이션 꺼야지 티 안남
<<<<<<< HEAD
                setSlide(slide-(85*length))
=======
                setSlide(slide-(90.5*length))
>>>>>>> 63855bb (ãchagepassword)
                setNum(num-length)

                setTimeout(() => {
                    setTransition('all 0.3s')
                }, 100);
            }else if(num == 1){
                setTransition(''); 
<<<<<<< HEAD
                setSlide(slide+(85*length))
=======
                setSlide(slide+(90.5*length))
>>>>>>> 63855bb (ãchagepassword)
                setNum(num+length)

                setTimeout(() => {
                    setTransition('all 0.3s')
                }, 100);
            }
        }, 300)//슬라이드 애니메이션 끝나고
        return () => {
            clearInterval(timer);
        };
    },[num])    

    return (
        <div className='carousel-area'>
<<<<<<< HEAD
            <div className='main-carousel' style={{               
                width : `${270*slideImg.images.length}vw`,
=======
            <div className='main-carousel' style={{     
                width : `${length * 200}vw`,//SlideBox 두개쓰니까 길이의 두배의 100vw만큼      
>>>>>>> 63855bb (ãchagepassword)
                transition: transition, 
                transform: `translateX(-${slide}vw)`
                }}>
                <SlideBox num={num} transition={transition}/>
                <SlideBox num={num} transition={transition}/>
                <button className='prev-btn' onClick={()=>{moveSlide(0)}} style={{transition: transition, transform: `translateX(${slide}vw)`}}>
                    <span className="material-symbols-outlined" style={{color:'white'}}>arrow_back_ios</span>
                </button>
                <button className='next-btn' onClick={()=>{moveSlide(1)}} style={{transition: transition, transform: `translateX(${slide}vw )`}}>
                <span className="material-symbols-outlined" style={{color:'white'}}>arrow_forward_ios</span>
                </button>
            </div>
        </div>
    );
}

