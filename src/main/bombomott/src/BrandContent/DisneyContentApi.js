import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from "axios";


function DisneyContentApi(brand) {
    const [brandData1, setBrandData1] = useState('');
    const [brandData2, setBrandData2] = useState('');
    const [brandData3, setBrandData3] = useState('');
    const [brandData4, setBrandData4] = useState('');

    const [brandName , setBrandName] = useState(brand);
    const [brandCode, setBrandCode] = useState(0);

    useEffect(()=>{
        if(brandName == 'disney'){
            setBrandCode(3166)
        }else if(brandName == 'pixar'){
            setBrandCode(3)
        }else if(brandName == 'marvel'){
            setBrandCode(420)
        }else if(brandName == 'national-geographic'){
            setBrandCode(7521)
        }
    },[brandName])                            

    useEffect(()=>{

        const BrandData1 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=1&sort_by=popularity.desc&with_companies=${brandCode}`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };

        const BrandData2 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=2&sort_by=popularity.desc&with_companies=${brandCode}`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };

        const BrandData3 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=5&sort_by=popularity.desc&with_companies=${brandCode}`,
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDkyN2ZmOTFkYjgxNmM1MmQ4NzAxOWRjZDc4NTFlMSIsInN1YiI6IjY1MTEyN2EzMjZkYWMxMDEyZDViYzNkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QRCxAT9F8FznwDJ31GIYiMogsjXDnw0eWInNi3sSn24'
            }
        };

        const BrandData4 = {
            method: 'GET',
            url: `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-KR&page=4&sort_by=popularity.desc&with_companies=${brandCode}`,
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

        if(brandCode !== 0){
            getRequest(BrandData1, setBrandData1);
            getRequest(BrandData2, setBrandData2);
            getRequest(BrandData3, setBrandData3);
            getRequest(BrandData4, setBrandData4);
        }
        
    },[brandCode])

    return {
        brandData1,
        brandData2,
        brandData3,
        brandData4,
    };
}

export default DisneyContentApi;