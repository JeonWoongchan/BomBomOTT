import React from "react";
import "./css/BoardMain.css";
import Board from "./Board";
import Header from "../Header";
import ToTop from "../ToTop";

export default function BoardMain() {
  return (
    <div>
      <Header />
      <Board />
      <ToTop />
    </div>
  );
}
