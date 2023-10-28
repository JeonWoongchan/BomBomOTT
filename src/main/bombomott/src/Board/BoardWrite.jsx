import React from "react";
import Header from "../Header";
import ToTop from "../ToTop";

export default function BoardWrite() {
  return (
    <div className="board-container">
      <div className="container1">
        <ul className="board-write-ul">
          <li>
            <label for="title">제목</label>
            <input
              type="text"
              id="title"
              name="title"
              class="form-control"
              placeholder="제목"
              required
            />
          </li>
          <li>
            <label for="content">내용</label>
            <textarea
              id="content"
              name="content"
              class="form-control"
              required
            ></textarea>
          </li>
          <li>
            <label for="file">첨부파일</label>
            <input type="file" id="file" name="file" class="form-control" />
          </li>
        </ul>
        <div className="board-write-button">
          <button>저장</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
}
