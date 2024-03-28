import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function StarWarsContentApi() {
    const [brandData1, setBrandData1] = useState('');
    const [brandData2, setBrandData2] = useState('');
    const [brandData3, setBrandData3] = useState('');
    const [brandData4, setBrandData4] = useState('');

    useEffect(()=>{

        const BrandData1 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=1`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };

        const BrandData2 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/search/movie?query=star%20wars&include_adult=false&language=en-US&page=2`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };


        const getRequest = (a, b) => {
            axios.request(a)
                .then(function (response) {
                    b(response.data.results)
                })
                .catch(function (error) {
                    console.error(error);
                });
        }

        getRequest(BrandData1, setBrandData1);
        getRequest(BrandData2, setBrandData2);
    },[])

    return {
        brandData1,
        brandData2,
        brandData3,
        brandData4,
    };
}

export default StarWarsContentApi;