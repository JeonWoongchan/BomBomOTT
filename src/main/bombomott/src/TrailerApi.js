import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setContentTrailer } from "./store/store";

function ContentTrailer(movieId) {
  const dispatch = useDispatch();

  useEffect(() => {
    const ContentTrailer = {
      method: "GET",
      url: `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
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
    getRequest(ContentTrailer, setContentTrailer);
  }, [movieId]);
}
export default ContentTrailer;
