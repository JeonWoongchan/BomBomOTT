import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { SiHotjar } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTriangleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { boardlist } from "../BackEndData/BoardList";
import { formatAgo } from "../util/date";

export default function Board() {
  const [searchTerm, setSearchTerm] = useState("");
  const { nowProfileCode } = useParams();
  const [boardListData, setBoardListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filteredBoardList, setFilteredBoardList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // BoardList 함수를 호출하여 데이터를 가져옴
        const data = await boardlist(); // BoardList 함수가 Promise를 반환하므로 await 사용

        setBoardListData(data);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setFilteredBoardList(boardListData);
  }, [boardListData]);

  useEffect(() => {
    if (searchTerm !== "") {
      const filteredItems = boardListData.filter((item) => {
        const content = item.title.toLowerCase();
        return content.includes(searchTerm);
      });
      // 검색 결과에 따라 게시물을 업데이트합니다.
      setFilteredBoardList(filteredItems);
    } else {
      setFilteredBoardList(boardListData);
    }
  }, [searchTerm, boardListData]);
  console.log(boardListData);

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
        {loading ? (
          <p>Loading....</p>
        ) : (
          <ul className="css-1iiugqq">
            {filteredBoardList.map((item) => (
              <li key={item.id} className="board-list">
                <Link
                  to={`/board/${nowProfileCode}/${item.title}`}
                  className="click-wrap"
                ></Link>
                <span className="likecount">
                  <BsTriangleFill className="likeImg" />
                  <span>{item.likeCount}</span>
                </span>
                <div className="board-content">
                  <a href="#">
                    <span>{item.title}</span>
                  </a>
                  <div className="content-detail">
                    <span>자유</span>
                    <span>{formatAgo(item.regDate, "ko")}</span>
                    <span>{item.regUserid}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

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
