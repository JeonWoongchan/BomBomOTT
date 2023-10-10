import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './css/contentTab.css'
import ContentSlide from '../ContentSlide'
import ContentTabText from './ContentTabText';
import SlideControll from '../SlideControll'

export default function ContentTab(props) {
    const [tab, setTab] = useState(0);
    const {SlideItemNum, carouselStyle, titleStyle} =  SlideControll();

    const tabBoxStyle = (i)=>{
        return{
            borderBottom : tab === i ? '2px solid white' : null
        }
    }

    const ContentTabBox = (i, text)=>{
        return(
            <div className="box" onClick={()=>{setTab(i)}} style={tabBoxStyle(i)}>{text}</div>
        )
    }

    return (
        <div className="content-tab">
            <div className="tab-box">
                {ContentTabBox(0, '에피소드')}
                {ContentTabBox(1, '추천작')}
                {ContentTabBox(2, '상세 정보')}
            </div>
            <div className="tab-box-detail">
                <TabContent tab={tab} receivedData={props.receivedData} receivedDataAll={props.receivedDataAll} genre={props.genre} SlideItemNum={SlideItemNum}/>
            </div>
        </div>
    );
}

function TabContent(props){
    const {contentType, contentGenre, contentId} = useParams() // useParams로 가져오면 타입이 문자열임
    const foundAll = Object.values(props.receivedDataAll).filter(e => e.id != contentId);//보고있는 콘텐츠 아이디 제외하고 전체
    const foundGenre = Object.values(foundAll).filter(e => e.genre_ids.includes(Number(contentGenre)));
    return [<ContentSlide data={props.receivedData} SlideItemNum={props.SlideItemNum}/>, 
            <ContentSlide data={foundGenre} SlideItemNum={props.SlideItemNum}/>, 
            <ContentTabText data={props.receivedData} genre={props.genre}/>][props.tab]
}


