import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setIsLoading } from "../store/store";

export default function SearchContent() {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const searchMulti = useSelector((state) => state.searchMulti);
  const navigate = useNavigate();
  const [loadCount, setLoadCount] = useState(0);
  const [boxOpacity, setBoxOpacity] = useState(true);

  useEffect(() => {
    // 이미지 로딩 완료시 보여지도록 설정
    if (loadCount >= 10) {
      setIsLoading(false);
      setBoxOpacity(true);
    }
    // console.log(loadCount)
  }, [loadCount]);

  const contentBoxStyle = () => {
    return {
      opacity: boxOpacity ? 1 : 0,
      transition: "all 0.5s",
    };
  };

  return (
    <div className="search-content">
      <div className="search-box" style={contentBoxStyle()}>
        {searchMulti.map((a, i) => {
          const Data = searchMulti[i];
<<<<<<< HEAD
          const DataAll = searchMulti;
          const TYPE = a.media_type;
          console.log(TYPE);
=======
          const DataAll = searchMulti.filter((e) => e.backdrop_path != null);
          const TYPE = a.mediaType == undefined ? "series" : a.mediaType;
>>>>>>> ddd8190ca290eea616e3fd503747a31a9f1b9cc3
          return searchMulti[i].backdrop_path != null ? (
            <img
              src={`${BASE_URL}${searchMulti[i].backdrop_path}`}
              key={i}
              className="img00"
              onLoad={() => {
                setLoadCount((prev) => prev + 1);
              }}
              onClick={() => {
                navigate(`/content/${a.media_type}/${a.genre_ids[0]}/${a.id}`, {
                  state: {
                    data: Data,
                    dataAll: DataAll,
                  },
                });
              }}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}
