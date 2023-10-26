import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import './css/contentTab.css'
import ContentSlide from '../ContentSlide'
import ContentTabText from './ContentTabText';
import SlideControll from '../SlideControll'
import ContentEpisode from './ContentEpisode';

export default function ContentTab(props) {  
    const {SlideItemNum, carouselStyle, titleStyle} =  SlideControll();
    const {contentType} = useParams()
    const [tab, setTab] = useState(0);

    const tabBoxStyle = (i)=>{
        return{
            borderBottom : tab === i ? '2px solid white' : null
        }
    }

    return (
        <div className="content-tab">
            <div className="tab-box">
                {
                    contentType == 'movie' ? // 영화일 경우는 에피소드 안보이게 설정
                    <>
                        <CreateTab setTab={setTab} tabBoxStyle={tabBoxStyle} num={0} text={'추천작'}/>
                        <CreateTab setTab={setTab} tabBoxStyle={tabBoxStyle} num={1} text={'상세정보'}/>
                    </> :
                    <>
                        <CreateTab setTab={setTab} tabBoxStyle={tabBoxStyle} num={0} text={'에피소드'}/>
                        <CreateTab setTab={setTab} tabBoxStyle={tabBoxStyle} num={1} text={'추천작'}/>
                        <CreateTab setTab={setTab} tabBoxStyle={tabBoxStyle} num={2} text={'상세정보'}/>
                    </>
                }
            </div>
            <div className="tab-box-detail">
                <TabContent tab={tab} receivedData={props.receivedData} receivedDataAll={props.receivedDataAll} genre={props.genre} SlideItemNum={SlideItemNum}/>
            </div>
        </div>
    );
}

function CreateTab(props){
    return(
        <div className="box" onClick={()=>{props.setTab(props.num)}} style={props.tabBoxStyle(props.num)}>{props.text}</div>
    )
}

function TabContent(props){
    const {contentType, contentGenre, contentId} = useParams() // useParams로 가져오면 타입이 문자열임
    const {SlideItemNum, carouselStyle, titleStyle} =  SlideControll();

    const foundAll = Object.values(props.receivedDataAll).filter(e => e.id != contentId);//보고있는 콘텐츠 아이디 제외하고 전체
    const foundUndefined = Object.values(foundAll).filter(e => e.genre_ids != undefined);
    const foundGenre = Object.values(foundUndefined).filter(e => e.genre_ids.includes(Number(contentGenre)));
    
    return [contentType == 'movie' ? <ContentSlide data={foundGenre} SlideItemNum={SlideItemNum}/> :<ContentEpisode SlideItemNum={SlideItemNum}/>, 
            contentType == 'movie' ? <ContentTabText data={props.receivedData} genre={props.genre}/> : <ContentSlide data={foundGenre} SlideItemNum={SlideItemNum}/>, 
            <ContentTabText data={props.receivedData} genre={props.genre}/>][props.tab]
}


