import React, { useEffect, useState } from "react";
import { boardcontent } from "../BackEndData/BoardContent";
import { formatAgo } from "../util/date";
import { BsTriangleFill } from "react-icons/bs";
import { LiaCommentDots } from "react-icons/lia";
import { boardcommentwrite } from "../BackEndData/BoardCommentWrite";
import { boardlike } from "../BackEndData/BoardLike";
import { boardupdate } from "../BackEndData/BoardContentUpdate";
import { boarddelete } from "../BackEndData/BoardContentDelete";
import { useNavigate, useParams } from "react-router-dom";

export default function BoardDetailContent() {
  const { nowProfileCode } = useParams();
  const storedData = localStorage.getItem("filteredBoardList");
  const [boardContent, setBoardContent] = useState();
  const [boardTitle, setBoardTitle] = useState();
  const [userId, setUserId] = useState();
  const [boardRegDate, setBoardRegDate] = useState();
  const [viewCount, setViewCount] = useState();
  const [likeCount, setLikeCount] = useState();
  const [boardComment, setBoardComment] = useState([]);
  const [popularSort, setPopularSort] = useState(false);
  const [latestSort, setLatestSort] = useState(false);
  const [upperCommentIdIs0, setUpperCommentIdIs0] = useState([]);
  const [commentCount, setCommentCount] = useState();
  const [answerStates, setAnswerStates] = useState({});
  const [replyStates, setReplyStates] = useState({});
  const [textareadata, setTextareadata] = useState();
  const [textareadata2, setTextareadata2] = useState();
  const [textareadata3, setTextareadata3] = useState();
  const [boardwriteId, setBoardwriteId] = useState();
  const [filepath, setFilepath] = useState();
  const [loginId, setLoginId] = useState();
  const navigate = useNavigate();
  const [commentId, setCommentId] = useState();
  const [filename, setFilename] = useState();

  useEffect(() => {
    boardcontent(storedData)
      .then((data) => {
        console.log(data);
        setBoardContent(data.board.content);
        setBoardTitle(data.board.title);
        setUserId(data.board.regUserid);
        setBoardRegDate(data.board.regDate);
        setViewCount(data.board.viewCount);
        setLikeCount(data.board.likeCount);
        setBoardComment(data.boardComment);
        setCommentCount(data.commentCount);
        setBoardwriteId(data.board.id);
        setFilepath(data.board.filepath);
        setLoginId(data.board.loginId);
        setCommentId(data.boardComment.regUserid);
        setFilename(filename);

        const initialAnswerStates = {};
        const initialReplyStates = {};
        data.boardComment.forEach((comment) => {
          initialAnswerStates[comment.commentId] = false;
          initialReplyStates[comment.commentId] = false;
        });
        setAnswerStates(initialAnswerStates);
        setReplyStates(initialReplyStates);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [storedData]);

  useEffect(() => {
    const upperCommentIdIs0Array = boardComment.filter(
      (item) => item.upperCommentId === 0
    );
    setUpperCommentIdIs0(upperCommentIdIs0Array);
  }, [boardComment]);

  const handleTokenla = () => {
    if (popularSort === true) {
      setPopularSort((prev) => !prev);
      setLatestSort((prev) => !prev);
    }
  };

  const handleAnswer = (commentId) => {
    setAnswerStates((prevAnswerStates) => {
      const newAnswerStates = {};
      for (const key in prevAnswerStates) {
        newAnswerStates[key] = false;
      }
      newAnswerStates[commentId] = !prevAnswerStates[commentId];
      return newAnswerStates;
    });

    setReplyStates((prevReplyStates) => {
      const newReplyStates = {};
      for (const key in prevReplyStates) {
        newReplyStates[key] = false;
      }
      return newReplyStates;
    });
  };

  const handleReply = (commentId) => {
    setReplyStates((prevReplyStates) => {
      const newReplyStates = {};
      for (const key in prevReplyStates) {
        newReplyStates[key] = false;
      }
      newReplyStates[commentId] = !prevReplyStates[commentId];
      return newReplyStates;
    });

    setAnswerStates((prevAnswerStates) => {
      const newAnswerStates = {};
      for (const key in prevAnswerStates) {
        newAnswerStates[key] = false;
      }
      return newAnswerStates;
    });
  };

  const handleCommentWrite = (boardId, upperCommentId, textareadata) => {
    boardcommentwrite(boardId, upperCommentId, textareadata)
      .then(() => {
        console.log("댓글 작성 성공");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handletextchange = (e) => {
    setTextareadata(e.target.value);
  };
  const handletextchange2 = (e) => {
    setTextareadata2(e.target.value);
  };
  const handletextchange3 = (e) => {
    setTextareadata3(e.target.value);
  };

  const handleLike = () => {
    boardlike(boardwriteId)
      .then(() => {
        // 성공적으로 업데이트
        console.log("좋아요");
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteContent = () => {
    boarddelete(boardwriteId)
      .then(() => {
        // 성공적으로 업데이트
        console.log("삭제 완료");
        navigate(`/board/${nowProfileCode}`);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleUpdateContent = () => {
    navigate(`/board/${nowProfileCode}/write`, {
      state: {
        boardwriteId,
        boardTitle,
        boardContent,
        filepath,
      },
    });
  };

  return (
    <div className="board-container">
      <div className="container1">
        <div className="board-content-top">
          <h1>{boardTitle}</h1>
          <div>
            <div className="board-content-top-side">
              <span>자유</span>
              <span>{formatAgo(boardRegDate, "ko")}</span>
              <span>{userId}</span>
            </div>
            <div className="board-content-top-side">
              <span>조회수 {viewCount}</span>
              <span>댓글 {commentCount}</span>
              <span>좋아요 {likeCount}</span>
            </div>
          </div>
          {loginId === userId && (
            <ul>
              <li>
                <button className="contentdelete" onClick={handleDeleteContent}>
                  삭제
                </button>
              </li>
              <li>
                <button className="contentupdate" onClick={handleUpdateContent}>
                  수정
                </button>
              </li>
            </ul>
          )}
        </div>
        <div className="board-content-middle">
          <div className="board-content-middle-1">
            <article>
              <p>{boardContent}</p>
              {filepath && <img src={filepath} alt="파일 사진" />}
            </article>
          </div>
        </div>
        <div className="board-content-likebtn">
          <button type="button" onClick={() => handleLike()}>
            <BsTriangleFill className="likebtncount" />
            {likeCount}
          </button>
        </div>
        <div className="board-comment">
          <div className="commentCount">
            <div className="commentbar">
              <div>
                <h2>댓글</h2>
                <span>
                  총 <em>{commentCount}</em> 개
                </span>
              </div>
            </div>
          </div>
          <div className="css-writecomment">
            <div className="second-div">
              <div>
                <textarea
                  name="content"
                  id="comment-content"
                  maxLength="1000"
                  value={textareadata3}
                  onChange={handletextchange3}
                  placeholder="주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
                ></textarea>
                <div>
                  <div>
                    <span>(1000)</span>
                  </div>
                  <button
                    type="button"
                    onClick={() =>
                      handleCommentWrite(boardwriteId, 0, textareadata3)
                    }
                  >
                    작성
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="category-sort">
            <button data-active={latestSort} onClick={handleTokenla}>
              최신순
            </button>
          </div>
          <div className="total-comment">
            {boardComment === null ? (
              <p>현재 댓글이 존재하지않습니다</p>
            ) : (
              <ul>
                {upperCommentIdIs0.map((item) => (
                  <li key={item.commentId} className="comment-list">
                    <div>
                      <div>
                        <div className="comment-list-top">
                          <span>{item.regUserid}</span>
                          <span>{formatAgo(item.regDate, "ko")}</span>
                        </div>
                        <div>
                          <div>
                            <p>{item.content}</p>
                          </div>
                        </div>
                        <ul>
                          <li>
                            <button
                              className="comment-btn"
                              onClick={() => handleAnswer(item.commentId)}
                            >
                              <LiaCommentDots className="comment-img" />
                              <span>답글 쓰기</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {answerStates[item.commentId] && (
                      <ul className="comment-write">
                        <li>
                          <div>
                            <div className="second-div">
                              <div>
                                <textarea
                                  name="content"
                                  id="comment-content"
                                  maxLength="1000"
                                  value={textareadata2}
                                  onChange={handletextchange2}
                                  placeholder="주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
                                ></textarea>
                                <div>
                                  <div>
                                    <span>(1000)</span>
                                  </div>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleCommentWrite(
                                        item.boardId,
                                        item.commentId,
                                        textareadata2
                                      )
                                    }
                                  >
                                    작성
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    )}

                    <ul className="commentComment">
                      {boardComment
                        .filter(
                          (comment) => comment.upperCommentId === item.commentId
                        )
                        .map((comment) => (
                          <li key={comment.commentId} className="comment-lists">
                            <div>
                              <div>
                                <div className="comment-list-top">
                                  <span>{comment.regUserid}</span>
                                  <span>
                                    {formatAgo(comment.regDate, "ko")}
                                  </span>
                                </div>
                                <div>
                                  <div>
                                    <p>{comment.content}</p>
                                  </div>
                                </div>
                                <ul>
                                  <li>
                                    <button
                                      className="comment-btn"
                                      onClick={() =>
                                        handleReply(comment.commentId)
                                      }
                                    >
                                      <LiaCommentDots className="comment-img" />
                                      <span>답글 쓰기</span>
                                    </button>
                                  </li>
                                </ul>
                                {replyStates[comment.commentId] && (
                                  <ul className="comment-write">
                                    <li>
                                      <div className="first-div">
                                        <div className="second-div">
                                          <div>
                                            <textarea
                                              name="content"
                                              id="comment-content"
                                              maxLength="1000"
                                              value={textareadata}
                                              onChange={handletextchange}
                                              placeholder="주제와 무관한 댓글, 타인의 권리를 침해하거나 명예를 훼손하는 게시물은 별도의 통보 없이 제재를 받을 수 있습니다."
                                            ></textarea>
                                            <div>
                                              <div>
                                                <span>(1000)</span>
                                              </div>
                                              <button
                                                type="button"
                                                onClick={() =>
                                                  handleCommentWrite(
                                                    item.boardId,
                                                    item.commentId,
                                                    textareadata
                                                  )
                                                }
                                              >
                                                작성
                                              </button>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </li>
                                  </ul>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                    </ul>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
