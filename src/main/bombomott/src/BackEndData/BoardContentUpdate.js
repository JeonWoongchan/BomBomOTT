import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function boardupdate(id, formData, navigate) {
  let axiosConfig = {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  };
  return axios
    .post(`http://localhost:8080/board/update/${id}`, formData, axiosConfig)
    .then((response) => {
      if (response.status === 200) {
        navigate(`/board`);
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
