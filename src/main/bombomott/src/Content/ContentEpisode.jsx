import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import ContentSlide from '../ContentSlide'


export default function ContentEpisode(props) {
    const {contentType, contentGenre, contentId} = useParams() // useParams로 가져오면 타입이 문자열임
    const contentDetail = useSelector((state)=>state.contentDetail)

    const [tab, setTab] = useState(0);
    const seasonCount = contentDetail ? new Array(contentDetail.number_of_seasons).fill(0) : null

    const tabBoxStyle = (i)=>{
        return{
            opacity : tab === i ? 1 : 0.6
        }
    }

    return (
        <div className='episode-list'>
            <div className="episode-box">
            {
                seasonCount.map((a,i)=>{ // 시즌 개수만큼 탭 버튼 생성
                    return(
                        
                            <div className='episode' key={i} onClick={()=>{setTab(i)}} style={tabBoxStyle(i)}>
                                <button>시즌{i+1}</button>
                            </div>
                        
                        
                    )
                })
            }
            </div>
            <TabContent tab={tab} contentDetail={contentDetail} SlideItemNum={props.SlideItemNum} seasonCount={seasonCount}/>
        </div>
    );
}

function TabContent(props){
    const [contentArray, setContentArray] = useState([]);
    useEffect(()=>{
        const arr = []
        if(props.seasonCount != null){
            for (let i = 0; i < props.seasonCount.length; i++) {
                arr.push(
                    <ContentSlide key={i} data={props.contentDetail} SlideItemNum={props.SlideItemNum}
                        episodeCount={props.contentDetail.seasons ? props.contentDetail.seasons[i].episode_count : 0}/>
                );
            }
            setContentArray(arr)
        }
    },[props.seasonCount])

    return contentArray[props.tab]
}
