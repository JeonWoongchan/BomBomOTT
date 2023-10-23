import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSearchMulti, setSearchMulti } from "./store/store";

function SearchMulti(text, page, dispatch) {
  const SearchMulti = {
    method: "GET",
    url: `https://api.themoviedb.org/3/search/multi?query=${text}&include_adult=false&language=ko-KR&page=${page}`,
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
  if (page === 1) {
    getRequest(SearchMulti, setSearchMulti);
  } else if (page > 1) {
    getRequest(SearchMulti, addSearchMulti);
  }

  return null;
}

export default SearchMulti;
