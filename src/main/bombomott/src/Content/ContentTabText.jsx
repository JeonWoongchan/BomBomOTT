import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

export default function ContentTabText(props) {
    // console.log(props.data)
    const contentDetail = useSelector((state)=>state.contentDetail)
    const {contentType} = useParams()
    const RunTime = contentDetail.runtime < 60 ? `${contentDetail.runtime}분` 
                    : `${Math.floor(contentDetail.runtime/60)}시간 ${contentDetail.runtime%60}분`
    return (
        <div className='tab-info'>
            <div className='title'>{contentType == 'movie' ? contentDetail.title : contentDetail.name}</div>
            <div className="detail">
                <div className="box1">{props.data.overview}</div>
                <div className="box2">
                    <div className="etc-info">
                        <h6>러닝 타임:</h6>
                        <p>{contentType == 'movie' ? RunTime: null}</p>
                    </div>
                    <div className="etc-info">
                        <h6>공개일:</h6>
                        <p>{contentType == 'movie' ? contentDetail.release_date : contentDetail.first_air_date}</p>
                    </div>
                    <div className="etc-info">
                        <h6>장르:</h6>
                        <p>{props.genre.join(', ')}</p>
                    </div>
                    <div className="etc-info">
                        <h6>관람등급:</h6>
                        <img className='img1' src='https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/8B03E101F8D8DA2184622BB0513EA1F2C5BD0B545E1F363A7288B204D8F32EAE/scale?width=240'/>
                    </div>
                </div>
                <div className="box2">
                    <div className="etc-info">
                        <h6>제작사:</h6>
                        {
                            contentDetail.production_companies ?
                            <>
                                <img className='img1' src={`https://image.tmdb.org/t/p/original${contentDetail.production_companies[0].logo_path}`}/>
                                <img className='img1' src={`https://image.tmdb.org/t/p/original${contentDetail.production_companies[1].logo_path}`}/>
                            </>
                            : <p>정보 없음</p>
                        }
                        
                    </div>
                    <div className="etc-info">
                        <h6>출연:</h6>
                        <p>정보 없음</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

