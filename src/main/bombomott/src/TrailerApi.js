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
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZmYyYWIxMjJjNDc2YzFkZmRjZjk3NjIyYjgzNjBiYiIsInN1YiI6IjY0MTdlODQ4OWVlMGVmMDA3ZmM1MmFkOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VvnmWobsJc2hJpMjf0-VHRO1V39tMEJY3vWzCOws8RQ",
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
