import React from "react";
import "./css/BoardMain.css";
import Board from "./Board";
import Header from "../Header";
import ToTop from "../ToTop";
import BoardDetailContent from "./BoardDetailContent";
import BoardWrite from "./BoardWrite";

export default function BoardMain({ type }) {
  return (
    <div>
      <Header />
      {type === "content" && <BoardDetailContent />}
      {type === "write" && <BoardWrite />}
      {type == null && <Board />}
      <ToTop />
    </div>
  );
}
