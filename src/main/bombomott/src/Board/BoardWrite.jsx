import React, { useEffect, useState } from "react";
import Header from "../Header";
import ToTop from "../ToTop";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import boardwrite from "../BackEndData/BoardWrite.js";
import { boardupdate } from "../BackEndData/BoardContentUpdate";

export default function BoardWrite() {
  const location = useLocation();
  const { boardwriteId, boardTitle, boardContent, filepath } =
    location.state || {};
  const [title, setTitle] = useState(""); // 제목 상태
  const [content, setContent] = useState(""); // 내용 상태
  const [file, setFile] = useState(null); // 첨부파일 상태
  const { nowProfileCode } = useParams();
  const navigate = useNavigate();

  async function fetchFile(filepath) {
    try {
      const response = await fetch(`http://localhost:8080/${filepath}`);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const fileData = await response.blob();
      return fileData;
    } catch (error) {
      throw error;
    }
  }
  // const goBack = () => {
  //   history.goBack();
  // };
  useEffect(() => {
    if (boardContent || boardTitle) {
      setTitle(boardTitle);
      setContent(boardContent);
    }
    if (filepath) {
      fetchFile(filepath)
        .then((fileData) => {
          const blob = new Blob([fileData]);
          const file = new File([blob], filepath);
          setFile(file);
        })
        .catch((error) => {
          console.error("파일 로딩 중 오류 발생:", error);
        });
    }
  }, [boardTitle, boardContent, filepath]);

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
    formData.append("file", file || null);
    console.log(file);
    console.log(filepath);

    if (boardwriteId) {
      if (file || (file === null && boardContent)) {
        // 파일이 선택되었거나, 파일이 선택되지 않았지만 이전 파일이 있는 경우 수정 가능
        boardupdate(boardwriteId, formData, nowProfileCode, navigate)
          .then(() => {
            console.log("게시물 수정 성공");
            // TODO: 작성 후에 어떤 동작을 수행할지 추가하세요.
          })
          .catch((error) => {
            // 에러 발생 시
            console.error(error);
            // TODO: 에러 처리를 추가하세요.
          });
      } else {
        // 파일을 선택하지 않았고 이전 파일도 없는 경우에 대한 처리 추가
        console.log("파일을 선택하세요 또는 이전 파일을 유지하세요.");
      }
    } else {
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
