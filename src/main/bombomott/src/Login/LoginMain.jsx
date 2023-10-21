import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

function LoginMain() {
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState('');
    const [loginMessage, setLoginMessage] = useState('');

    const history = useHistory();

    const handleInputId = (e) => {
        setUserId(e.target.value);
    }

    const handleInputPw = (e) => {
        setUserPw(e.target.value);
    }

    const onClickLogin = () => {
        axios.post("http://localhost:8080/login", {
            userid: userId,
            password: userPw,
        })
            .then((res) => {
                if (res.status === 200 && res.data === true) {
                    // 로그인 성공 시 페이지 이동
                    history.push("/main");
                } else if (res.status === 200 && res.data === false) {
                    // 로그인 실패 시 에러 메시지 표시
                    setLoginMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
                } else {
                    // 기타 상황 처리
                    console.error(res);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="login-container">
            <form style={{ marginTop: '500px' }}>
                <div>
                    <label htmlFor="userid">아이디</label>
                    <input type="text" id="userid" name="userid" className="form-control" placeholder="아이디를 입력하세요" value={userId} onChange={handleInputId} required />
                </div>
                <div>
                    <label htmlFor="password">패스워드</label>
                    <input type="password" id="password" name="password" className="form-control" placeholder="비밀번호를 입력하세요" required value={userPw} onChange={handleInputPw} />
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

export default LoginMain;