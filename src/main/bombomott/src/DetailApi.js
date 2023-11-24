import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setContentDetail } from "./store/store";
import axios from "axios";

function ContentDetail(media, id) {
  const dispatch = useDispatch();

  useEffect(() => {
    const ContentDetail = {
      method: "GET",
      url: `https://api.themoviedb.org/3/${media}/${id}?language=ko-KR`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
      },
    };

    const getRequest = (a, b) => {
      axios
        .request(a)
        .then(function (response) {
          if (response.data.results == undefined) {
            dispatch(b(response.data));
            console.log(response.data);
          } else {
            dispatch(b(response.data.results));
            console.log(response.data.results);
          }
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getRequest(ContentDetail, setContentDetail);
  }, [id]);

  return null;
}

export default ContentDetail;
