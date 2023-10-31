import React, { useEffect, useState } from "react";
import Header from "../Header";
import ToTop from "../ToTop";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import boardwrite from "../BackEndData/BoardWrite.js";
import boardupdate from "../BackEndData/BoardContentUpdate.js";

export default function BoardWrite() {
  const location = useLocation();
  const { boardwriteId, boardTitle, boardContent, filename } =
    location.state || {};
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (boardContent || boardTitle) {
      setTitle(boardTitle);
      setContent(boardContent);
    }
    if (filename) {
      const fileName = filename.split("_").slice(1).join("_");
      setFile(fileName);
    }
  }, [boardTitle, boardContent, filename]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setContent(event.target.value);
  };

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    console.log(event);
    console.log(selectedFile);
    setFile(selectedFile);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (file) {
      formData.append("file", file);
    }

    if (boardwriteId) {
      boardupdate(boardwriteId, formData, navigate)
        .then(() => {
          console.log("게시물 수정 성공");
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      boardwrite(formData, navigate)
        .then(() => {
          console.log("게시물 작성 성공");
        })
        .catch((error) => {
          console.error(error);
        });
    }
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
            <label htmlFor="file">첨부파일</label>
            <input
              type="file"
              id="file"
              name="file"
              className="form-control"
              onChange={handleFileChange}
            />
          </li>
          {file && <p>{file}</p>}
        </ul>
        <div className="board-write-button">
          <button onClick={handleSubmit}>저장</button>
          <button>취소</button>
        </div>
      </div>
    </div>
  );
}
