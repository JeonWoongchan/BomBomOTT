import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { SiHotjar } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTriangleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

export default function Board() {
  const [searchTerm, setSearchTerm] = useState("");
  const { nowProfileCode } = useParams();
  // const [boardItems, setBoardItems] = useState([
  //   // 게시물 데이터 배열 초기화
  //   //ex {content: ~~~~}
  // ]);
  // useEffect(() => {
  //   const filteredItems = boardItems.filter((item) => {
  //     const content = item.content.toLowerCase();
  //     return content.includes(searchTerm);
  //   });
  //   // 검색 결과에 따라 게시물을 업데이트합니다.
  //   setBoardItems(filteredItems);
  // }, [searchTerm, boardItems]);

  return (
    <div className="board-container">
      <div className="container1">
        <h5>전체</h5>
        <div className="top-board">
          <div className="type-board">
            <li>
              <CiSun className="cisun" />
              최신
            </li>
            <li>
              <SiHotjar className="sihotjar" />
              인기
            </li>
          </div>
          <div className="search-title">
            <input
              type="text"
              placeholder="검색"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
            />
            <button className="search-button" type="button">
              <AiOutlineSearch />
            </button>
          </div>
        </div>
        <ul className="css-1iiugqq">
          {/* {boardItems.map((item, index) => (
            <li key={index} className="board-list">
              <Link
              to={`/board/${nowProfileCode}/${item.content}`}
              className="click-wrap"
            ></Link>
              <span className="likecount">
                <BsTriangleFill className="likeImg" />
                <span>0</span>
              </span>
              <div className="board-content">
                <a href="#">
                  <span>{item.content}</span>
                </a>
                <div className="content-detail">
                  <span>자유</span>
                  <span>몇 초 전</span>
                  <span>opgg29182</span>
                </div>
              </div>
            </li>
          ))} */}

          <li className="board-list">
            <a href="#" className="click-wrap"></a>
            <span className="likecount">
              <BsTriangleFill className="likeImg" />
              <span>0</span>
            </span>
            <div className="board-content">
              <a href="#">
                <span>그 긴거 첫판</span>
              </a>
              <div className="content-detail">
                <span>자유</span>
                <span>몇 초 전</span>
                <span>opgg29182</span>
              </div>
            </div>
          </li>
          <li className="board-list">
            <a href="#" className="click-wrap"></a>
            <span className="likecount">
              <BsTriangleFill className="likeImg" />
              <span>0</span>
            </span>
            <div className="board-content">
              <a href="#">
                <span>아뇨 저아닌데요</span>
              </a>
              <div className="content-detail">
                <span>자유</span>
                <span>몇 초 전</span>
                <span>opgg29182</span>
              </div>
            </div>
          </li>
          <li className="board-list">
            <a href="#" className="click-wrap"></a>
            <span className="likecount">
              <BsTriangleFill className="likeImg" />
              <span>0</span>
            </span>
            <div className="board-content">
              <a href="#">
                <span>자랭하실분?</span>
              </a>
              <div className="content-detail">
                <span>자유</span>
                <span>몇 초 전</span>
                <span>opgg29182</span>
              </div>
            </div>
          </li>
        </ul>

        <div className="pagination">
          <a href="#" className="btn-page1">
            <IoIosArrowBack />
            이전
          </a>
          <a href="#" className="btn-page2">
            다음
            <IoIosArrowForward className="greater" />
          </a>
        </div>
      </div>
    </div>
  );
}
