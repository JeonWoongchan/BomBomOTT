import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./css/search.css";
import SearchContent from "./SearchContent";
import SearchMulti from "../SearchApi";
import useScroll from "../useScroll";
import { useDispatch, useSelector } from "react-redux";

export default function SearchMain() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const scroll = useScroll();
  const isLoading = useSelector((state) => state.isLoading);
  const [text, setText] = useState("");
  const [incrementHeight, setIcrementHeight] = useState(200);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    if (
      scroll + window.innerHeight + 5 >=
        document.documentElement.scrollHeight * 0.9 &&
      !isLoading
    ) {
      //스크롤 끝까지 내렸을때
      // handleHeight();
      setPage((prev) => prev + 1);
    }
  }, [scroll]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
  }, [text]);

  useEffect(() => {
    SearchMulti(text, page, dispatch);
  }, [text, page, dispatch]);

  const handleHeight = () => {
    const newHeight = window.innerHeight + incrementHeight;
    document.querySelector(".searchPage").style.height = newHeight + "px";
    setIcrementHeight((prev) => prev + 100);
    setPage((prev) => prev + 1);
  };

  return (
    <div className="searchPage">
      <input
        type="text"
        placeholder="제목, 캐릭터 또는 장르로 검색하세요"
        className="inputBox"
        value={text}
        onChange={handleUpdate}
      />

      <div className="content">
        <p className="text-a">컬렉션 둘러보기</p>
        <SearchContent />
      </div>
    </div>
  );
}
