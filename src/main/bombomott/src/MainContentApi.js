import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setGenreMovie, addGenreMovie } from './store/store';
import axios from "axios";

// api 받아오는 함수
function MainContentApi() {
    const trendMovies = useSelector((state) => state.trendMovies)
    const tvShow = useSelector((state) => state.tvShow)
    const genreList = [28, 35, 16, 36, 10751, 80, 10749, 9648, 878, 14]
    const [reciveData, setReciveData] = useState([])
    const [DataList, setDataList] = useState([trendMovies, tvShow])

    useEffect(() => {
        const fetchData = async () => {
            const updatedDataList = []; // 새로운 배열 생성

            for (let i = 0; i < genreList.length; i++) {
                const options = {
                    method: 'GET',
                    url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${genreList[i]}`,
                    headers: {
                        accept: 'application/json',
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
                    }
                };

                try {
                    const response = await axios.request(options);
                    updatedDataList.push(response.data.results);
                } catch (error) {
                    console.error(error);
                }
            }

            setDataList([trendMovies, tvShow, ...updatedDataList]); // 새로운 배열로 상태 업데이트
        };

        fetchData();
    }, [trendMovies, tvShow]);
        
    return {DataList};
}

export default MainContentApi;