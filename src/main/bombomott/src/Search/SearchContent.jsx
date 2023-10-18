import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchContent() {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const searchMulti = useSelector((state) => state.searchMulti);
  const navigate = useNavigate();

  return (
    <div className="search-content">
      <div className="search-box">
        {searchMulti.map((a, i) => {
          const Data = searchMulti[i];
          const DataAll = searchMulti;
          const TYPE = a.media_Type;
          return searchMulti[i].backdrop_path != null ? (
            <img
              src={`${BASE_URL}${searchMulti[i].backdrop_path}`}
              key={i}
              className="img00"
              onClick={() => {
                navigate(`/content/${TYPE}/${a.genre_ids[0]}/${a.id}`, {
                  state: { data: Data, dataAll: DataAll },
                });
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
