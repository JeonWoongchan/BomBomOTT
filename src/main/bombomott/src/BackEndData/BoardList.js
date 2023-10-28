import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function boardlist(pageNo, searchType, searchKeyword, sortType) {
  return axios
    .post("http://localhost:8080/board/list", {
      page: pageNo,
      searchType: searchType,
      searchKeyword: searchKeyword,
      sortType: sortType,
    })
    .then((response) => {
      if (response.status === 200) {
        console.log(">>>> data : " + response.data);
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
