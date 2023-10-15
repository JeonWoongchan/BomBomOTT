import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./css/search.css";
import SearchContent from "./SearchContent";
import SearchMulti from "../SearchApi";

export default function SearchMain() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const { keyword } = useParams();
  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search/${text}`);
  };
  const handleUpdate = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);
  SearchMulti(text);

  return (
    <div className="searchPage">
      <form className="searchBox" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="제목, 캐릭터 또는 장르로 검색하세요"
          className="inputBox"
          value={text}
          onChange={handleUpdate}
        />
      </form>
      <div className="content">
        <p className="text-a">컬렉션 둘러보기</p>
        <SearchContent />
      </div>
    </div>
  );
}
