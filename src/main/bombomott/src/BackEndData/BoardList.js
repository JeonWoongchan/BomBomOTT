import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

//로그인 시 이메일 전달
//회원테이블에 전달받은 이메일이 있는지 확인 -> 유무 여부 전달
//정보 받아서 이메일 있으면 비밀번호 입력화면으로, 없으면 비밀번호 생성화면으로
export function boardlist() {
  return axios
    .get("http://localhost:8080/board/list")
    .then((response) => {
      if (response.status === 200) {
        return response.data; // 이 부분에서 서버에서 반환된 데이터를 사용
      } else {
        console.log("요청이 실패했습니다.");
        throw new Error("요청이 실패했습니다.");
      }
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}
