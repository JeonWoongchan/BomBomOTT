import 'bootstrap/dist/css/bootstrap.min.css';
import './css/contentDetail.css'
import useScroll from '../useScroll';
import MovieGenre from '../MovieGenre'
import TVGenre from '../TVGenre'
import ContentTab from './ContentTab';
import DetailApi from '../DetailApi'
import PostViewData from '../BackEndData/PostViewData'
import AddInterest from '../BackEndData/addInterest'

import { useEffect, useState } from "react";
import { avbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ContentModal from "./ContentModal";
import "./css/contentModal.css";

function ContentDetail(props) {
    const {contentType, contentId} = useParams()

    const contentDetail = useSelector((state)=>state.contentDetail)
    const Release_date = contentType == 'series' ? contentDetail.first_air_date : contentDetail.release_date;
    const RunTime = contentDetail.runtime < 60 ? `${contentDetail.runtime}분` 
                    : `${Math.floor(contentDetail.runtime/60)}시간 ${contentDetail.runtime%60}분`
    const BASE_URL = 'https://image.tmdb.org/t/p/original/'

    const [genre, setGenre] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [teaser, setTeaser] = useState(false);

    const profileId = localStorage.getItem('profileId')
    const { addInterest }= AddInterest(profileId, contentId, contentType)

  useEffect(() => {
    window.scrollTo(0, 0);
    const copy = [...genre];
    props.receivedData.genre_ids ?
    props.receivedData.genre_ids.forEach((a, i) => {
      if (props.receivedData.media_type == "movie") {
        const found = MovieGenre[a];
        if (found) {
          copy.push(found);
        }
      } else {
        const found = TVGenre[a];
        if (found) {
          copy.push(found);
        }
      }
    }) :
    props.receivedData.genres.forEach((a, i) => {
      if (props.receivedData.media_type == "movie") {
        const found = MovieGenre[a];
        if (found) {
          copy.push(found);
        }
      } else {
        const found = TVGenre[a];
        if (found) {
          copy.push(found);
        }
      }
    })
    setGenre(copy);
  }, [MovieGenre, TVGenre]);

  const firstDotIndex = props.receivedData.overview.indexOf(".");
  const InfoText =
    firstDotIndex !== -1
      ? props.receivedData.overview.slice(0, firstDotIndex + 1) // 첫 번째 마침표까지의 텍스트
      : props.receivedData.overview;

  return (
    <div className="content-container">
      <div className="content-detail">
        <div className="content-title">
          {/* {props.receivedData.original_title} */}
          {contentType == "movie" ? (
            <img
              className="title-img"
              src="https://www.themoviedb.org/t/p/original/gC3fmmZbIHaGIsjcjyyuACZSiBZ.png"
            />
          ) : (
            <img
              className="title-img"
              src="https://image.tmdb.org/t/p/original/fGcycVw3joQLr42FvLGCBlt6Mgu.svg"
            />
          )}
        </div>
        <div className="content-info-box">
          <div className="info-top">
            <div className="top1">
              <img
                className="img1"
                src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/8B03E101F8D8DA2184622BB0513EA1F2C5BD0B545E1F363A7288B204D8F32EAE/scale?width=240"
              />
              <img
                className="img2"
                src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/FD4912EB883B7CCB847EB9C62E1FC853D547CAF7DF940B9086AE35AFAD0848AB/scale?width=240"
              />
              <img
                className="img3"
                src="https://disney.images.edge.bamgrid.com/ripcut-delivery/v1/variant/disney/FAE63AC7AC11C27C949E1856CF188BF09FC20EA52AEA3B65B43C24EEB5F29BFD/scale?width=240"
              />
              <span>
                {Release_date && contentType == "movie"
                  ? `${Release_date.slice(0, 4)}•${RunTime}`
                  : Release_date && contentType == "series"
                  ? `${Release_date.slice(0, 4)}•시즌 ${
                      contentDetail.number_of_seasons
                    }개`
                  : null}
              </span>
            </div>
            <div className="top2">{genre.join(", ")}</div>
          </div>
          <div className="info-button">
            <button
              className="play-button"
              onClick={() => {
                setModalOpen(true);
                setTeaser(false);
              }}
            >
              <img src="/img/playButton.png" alt="img playbutton" />
              재생
            </button>
            {modalOpen && (
              <ContentModal
                setModalOpen={setModalOpen}
                contentType={contentType}
              />
            )}
            {props.receivedData.media_type == "movie" ? (
              <button
                className="trailer-button" type='button'
                onClick={() => {
                  setTeaser(true);
                  setModalOpen(false);
                }}
              >
                예고편
              </button>
            ) : null}
            {teaser && (
              <ContentModal
                setModalOpen={setTeaser}
                contentType={contentType}
                type
              />
            )}
            <button className="add-button" type='button' onClick={()=>{addInterest()}}>
              <img src="/img/addButton.png" />
            </button>
          </div>
          <div className="info-text">{InfoText}</div>
        </div>
        <ContentTab
          receivedData={props.receivedData}
          receivedDataAll={props.receivedDataAll}
          genre={genre}
        />
      </div>
    </div>
  );
}

export default ContentDetail;
