import React, { useState } from "react";
import Header from "../Header";
import ToTop from "../ToTop";
import { useNavigate, useParams } from "react-router-dom";
import boardwrite from "../BackEndData/BoardWrite.js";

export default function BoardWrite() {
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // 내용 상태
  const [file, setFile] = useState(null); // 첨부파일 상태
  const { nowProfileCode } = useParams();
  const navigate = useNavigate();

  // const goBack = () => {
  //   history.goBack();
  // };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile || null);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }
    boardwrite(formData, nowProfileCode, navigate)
      .then(() => {
        console.log("게시물 작성 성공");
        // TODO: 작성 후에 어떤 동작을 수행할지 추가하세요.
      })
      .catch((error) => {
        // 에러 발생 시
        console.error(error);
        // TODO: 에러 처리를 추가하세요.
      });
  };
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
              className="form-control"
              placeholder="제목"
              value={title}
              onChange={handleTitleChange}
              required
            />
          </li>
          <li>
            <label for="content">내용</label>
            <textarea
              id="content"
              name="content"
              className="form-control"
              value={content}
              onChange={handleContentChange}
              required
            ></textarea>
          </li>
          <li>
            <label for="file">첨부파일</label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-control"
              onChange={handleFileChange}
            />
          </li>
        </ul>
        <div className="board-write-button">
          <button onClick={handleSubmit}>저장</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
}
