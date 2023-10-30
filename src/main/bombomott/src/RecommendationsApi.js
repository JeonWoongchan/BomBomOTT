import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function RecommendationsApi(media, id) {

    const [recommendList, setRecommendList] = useState([]);
    const mediaType = media == 'series' ? 'tv' : media == 'tv' ? 'tv' : 'movie'

    useEffect(()=>{
        const Recommendations = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/${mediaType}/${id}/recommendations?language=ko-KR&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };

        const getRequest = (a, b) => {
            axios.request(a)
                .then(function (response) {
                    if(response.data.results == undefined){
                        b(response.data);
                        console.log(response.data)
                    }else{
                        b(response.data.results);
                        console.log(response.data.results)
                    }
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        getRequest(Recommendations, setRecommendList);
    },[id])

    return {
        recommendList
    };
}

export default RecommendationsApi;