import React from "react";
import "./css/BoardMain.css";
import Board from "./Board";
import Header from "../Header";
import ToTop from "../ToTop";
import { useParams } from "react-router-dom";

export default function BoardMain() {
  const { nowProfileCode } = useParams();
  return (
    <div>
      <Header />
      <Board />
      <ToTop />
    </div>
  );
}
