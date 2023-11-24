import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTvTrailer } from "./store/store";

function TvTrailer(tvId) {
  const dispatch = useDispatch();

  useEffect(() => {
    const TvTrailer = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/${tvId}/videos?language=en-US`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
      },
    };
    const getRequest = (a, b) => {
      axios
        .request(a)
        .then(function (response) {
          dispatch(b(response.data.results));
        })
        .catch(function (error) {
          console.error(error);
        });
    };
    getRequest(TvTrailer, setTvTrailer);
  }, [tvId]);
}

export default TvTrailer;
