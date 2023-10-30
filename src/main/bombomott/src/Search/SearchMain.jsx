import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "./css/search.css";
import SearchContent from "./SearchContent";
import SearchMulti from "../SearchApi";
import useScroll from "../useScroll";
import { useDispatch, useSelector } from "react-redux";

export default function SearchMain() {
  const [page, setPage] = useState(1);
  const scroll = useScroll();
  const isLoading = useSelector((state) => state.isLoading);
  const [text, setText] = useState("");
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
      setPage((prev) => prev + 1);
    }
  }, [scroll]);

  useEffect(() => {
    window.scrollTo(0, 0);
    setPage(1);
  }, [text]);

  useEffect(() => {
    if (text) {
      SearchMulti(text, page, dispatch);
    }
  }, [text, page, dispatch]);

  // 화면이동해도 검색어 남기기
  useEffect(() => {
    const savedText = localStorage.getItem("text");
    if (savedText) setText(savedText);
  }, []);

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  useEffect(() => {
    setPage((prev) => prev + 1);
  }, []);

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
        <p className="text-a"></p>
        <SearchContent />
      </div>
    </div>
  );
}
