import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { CiSun } from "react-icons/ci";
import { SiHotjar } from "react-icons/si";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTriangleFill } from "react-icons/bs";
import { FaPencilAlt } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";
import { boardlist } from "../BackEndData/BoardList";
import { formatAgo } from "../util/date";

export default function Board() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [boardListData, setBoardListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [sortword, setSortword] = useState();
  const [existNextPage, setExistNextPage] = useState();
  const [popularSort, setPopularSort] = useState(false);
  const [latestSort, setLatestSort] = useState(true);
  const [selectedOption, setSelectedOption] = useState("title");

  useEffect(() => {
    const fetchData = async () => {
      try {
        // BoardList 함수를 호출하여 데이터를 가져옴
        const data = await boardlist(
          page,
          selectedOption,
          searchTerm,
          sortword
        ); // BoardList 함수가 Promise를 반환하므로 await 사용

        console.log(">>> data :" + JSON.stringify(data));

        console.log(">>> data.boardList : " + data.boardList);

        //setBoardListData(data);
        setBoardListData(data.boardList);
        setExistNextPage(data.existNextPage);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, [page, sortword, searchTerm, selectedOption]);

  const handleClick = () => {
    navigate(`/board/write`);
  };

  const handleLinkClick = (item) => {
    localStorage.setItem("filteredBoardList", JSON.stringify(item));
  };

  const handleNextPage = () => {
    setPage((prev) => prev + 1);
  };

  const handlePrevPage = () => {
    setPage((prev) => prev - 1);
  };

  const handleSort = () => {
    if (popularSort === true) {
      setPopularSort((prev) => !prev);
      setLatestSort((prev) => !prev);
    }
    setSortword("new");
  };

  const handleSort2 = () => {
    if (latestSort === true) {
      setLatestSort((prev) => !prev);
      setPopularSort((prev) => !prev);
    }
    setSortword("best");
  };

  const handleChangeOption = (e) => {
    const selectedValue = e.target.value;
    setSelectedOption(selectedValue);
  };

  return (
    <div className="board-container">
      <div className="container1">
        <div className="top-bar">
          <h5>전체</h5>
          <button className="write-button" onClick={handleClick}>
            <FaPencilAlt />
          </button>
        </div>
        <div className="top-board">
          <div className="type-board">
            <li data-active={latestSort} onClick={handleSort}>
              <CiSun className="cisun" />
              최신
            </li>
            <li data-active={popularSort} onClick={handleSort2}>
              <SiHotjar className="sihotjar" />
              인기
            </li>
          </div>
          <div className="select-search">
            <select className="select-option" onChange={handleChangeOption}>
              <option value="title">제목</option>
              <option value="content">내용</option>
              <option value="ALL">제목+내용</option>
            </select>
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
        </div>
        {loading ? (
          <p>Loading....</p>
        ) : (
          <ul className="css-1iiugqq">
            {boardListData.map((item) => (
              <li key={item.id} className="board-list">
                <Link
                  to={`/board/${item.title}`}
                  className="click-wrap"
                  onClick={() => handleLinkClick(item.id)}
                ></Link>
                <span className="likecount">
                  <BsTriangleFill className="likeImg" />
                  <span>{item.likeCount}</span>
                </span>
                <div className="board-content">
                  <a href="#">
                    <span>{item.title}</span>
                    {item.commentCount !== 0 && <em>[{item.commentCount}]</em>}
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
          {page !== 1 && (
            <a href="#" className="btn-page1" onClick={handlePrevPage}>
              <IoIosArrowBack />
              이전
            </a>
          )}

          {existNextPage && (
            <a href="#" className="btn-page2" onClick={handleNextPage}>
              다음
              <IoIosArrowForward />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
