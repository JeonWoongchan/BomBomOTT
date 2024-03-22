import React, { useEffect } from "react";
import { useSelector } from "react-redux";

export default function ContentModal({ setModalOpen, contentType, type }) {
  const contentTrailer = useSelector((state) =>
    contentType === "movie" ? state.contentTrailer : state.tvTrailer
  );
  const trailer = contentTrailer.filter(
    (trailer) => trailer.type === "Trailer"
  );
  const teaser = contentTrailer.filter((trailer) => trailer.type === "Teaser");

  const handleToken = () => {
    setModalOpen((prev) => !prev);
  };
  const alertToken = () => {
    alert("해당 영상은 제공되는 영상이 존재하지않습니다.");
    handleToken();
  };

  let keyValue;
  if (trailer.length === 0 && teaser.length === 0) {
    keyValue = 0;
  } else if (type && teaser.length > 0) {
    keyValue = teaser[0].key;
  } else if (type && teaser.length === 0 && trailer.length > 1) {
    keyValue = trailer[1].key;
  } else if (!type && trailer.length === 0) {
    keyValue = teaser[0].key;
  } else {
    keyValue = trailer[0].key;
  }

  return contentTrailer.length > 0 && keyValue !== 0 ? (
    <div className="modal-container">
      <iframe
        width="1080px"
        height="640px"
        src={`https://www.youtube.com/embed/${keyValue}`}
      />
      <button className="cancelBtn" onClick={handleToken}>
        X
      </button>
    </div>
  ) : (
    alertToken()
  );
}
