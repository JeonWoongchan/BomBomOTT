import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function SearchContent() {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const searchMulti = useSelector((state) => state.searchMulti);
  const navigate = useNavigate();

  return (
    <div className="seach-content">
      <div className="search-box">
        {searchMulti.map((a, i) => {
          const Data = searchMulti[i];
          const DataAll = searchMulti;
          const TYPE = a.mediaType;
          return (
            <img
              src={`${BASE_URL}${searchMulti[i].backdrop_path}`}
              key={i}
              onClick={() => {
                navigate(`/content/${TYPE}/${a.genre_ids[0]}/${a.id}`, {
                  state: { data: Data, dataAll: DataAll },
                });
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
