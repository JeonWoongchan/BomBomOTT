import React from 'react';
import axios from 'axios';
import {useEffect, useState} from "react";
import {Navbar, Nav, Container, NavDropdown, Button} from 'react-bootstrap'

export default function LoginMain() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');

    const handleInputId = (e)=>{
        setUserId(e.target.value);
    }

    const handleInputPw = (e)=>{
        setUserPw(e.target.value);
    }

    
    useEffect(()=>{
        console.log(userId, userPw)
    },[userId, userPw])

    const onClickLogin = () => {
        axios
            .post("http://localhost:8080/login", {
            userid: userId,
            password: userPw,
        })
            .then((res) => {
            
        })
        .catch();
    };

    return (
        <div className="login-container">
            <form style={{marginTop:'500px'}}>
                <div>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" id="userid" name="userid" className="form-control"  placeholder="아이디을 입력하세요" value={userId} onChange={handleInputId} required/>
                </div>
                <div>
                    <label htmlFor="password">패스워드 </label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="비밀번호를 입력하세요" required value={userPw} onChange={handleInputPw}/>
                </div>
                <hr className="my-4"/>
                <div className="row">
                    <div className="col">
                        <button className="w-100 btn btn-primary btn-lg" type="button" onClick={onClickLogin}>로그인</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

