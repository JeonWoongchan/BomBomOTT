import React from "react";
import { useParams } from "react-router-dom";
import Header from "../Header";
import "./css/search.css";

export default function Search() {
  const { keyword } = useParams();

  return (
    <div className="searchPage">
      <Header />
      <div className="searchBox">
        <input
          type="text"
          placeholder="제목, 캐릭터 또는 장르로 검색하세요"
          className="inputBox"
        />
      </div>
      <div className="content">
        <p className="text-a">컬렉션 둘러보기</p>
      </div>
    </div>
  );
}
