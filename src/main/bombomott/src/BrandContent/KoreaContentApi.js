import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

function StarWarsContentApi() {
  const [brandData1, setBrandData1] = useState("");
  const [brandData2, setBrandData2] = useState("");
  const [brandData3, setBrandData3] = useState("");
  const [brandData4, setBrandData4] = useState("");

  useEffect(() => {
    const BrandData1 = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=1`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
      },
    };

    const BrandData2 = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=2`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
      },
    };

    const BrandData3 = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=3`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
      },
    };

    const BrandData4 = {
      method: "GET",
      url: `https://api.themoviedb.org/3/tv/on_the_air?language=ko-KR&page=4`,
      headers: {
        accept: "application/json",
        Authorization: process.env.REACT_APP_TMDB_API_KEY,
      },
    };

    const getRequest = (a, b) => {
      axios
        .request(a)
        .then(function (response) {
          b(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    };

    getRequest(BrandData1, setBrandData1);
    getRequest(BrandData2, setBrandData2);
    getRequest(BrandData3, setBrandData3);
    getRequest(BrandData4, setBrandData4);
  }, []);

  return {
    brandData1,
    brandData2,
    brandData3,
    brandData4,
  };
}

export default StarWarsContentApi;
