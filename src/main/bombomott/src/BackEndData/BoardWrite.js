import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function boardwrite(formData, nowProfileCode, navigate) {
  let axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };

  return axios
    .post("http://localhost:8080/board/write", formData, axiosConfig)
    .then((response) => {
      if (response.status === 200) {
        navigate(`/board/${nowProfileCode}`);
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
