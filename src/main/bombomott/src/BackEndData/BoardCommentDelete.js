import React, { useState } from "react";
import axios, { toFormData } from "axios";
import { useNavigate } from "react-router-dom";

export default function boardcommentdelete(boardId, commentId) {
  return axios
    .post(`http://localhost:8080/board/comment/delete/${boardId}/${commentId}`)
    .then((response) => {
      if (response.status === 200) {
        console.log("요청완료");
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
