import React, { useEffect, useState } from "react";
import { boardcontent } from "../BackEndData/BoardContent";
import { formatAgo } from "../util/date";
import { BsTriangleFill } from "react-icons/bs";
import { LiaCommentDots } from "react-icons/lia";

export default function BoardDetailContent() {
  const storedData = localStorage.getItem("filteredBoardList");
  const [boardContent, setBoardContent] = useState();
  const [boardTitle, setBoardTitle] = useState();
  const [userId, setUserId] = useState();
  const [boardRegDate, setBoardRegDate] = useState();
  const [viewCount, setViewCount] = useState();
  const [likeCount, setLikeCount] = useState();
  const [boardComment, setBoardComment] = useState([]);
  const [popularSort, setPopularSort] = useState(true);
  const [latestSort, setLatestSort] = useState(false);
  const [upperCommentIdIs0, setUpperCommentIdIs0] = useState([]);
  const [commentCount, setCommentCount] = useState();

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

  const handleToken = () => {
    if (latestSort === true) {
      setLatestSort((prev) => !prev);
    }
  };

  const handleTokenla = () => {
    if (popularSort === true) {
      setPopularSort((prev) => !prev);
    }
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
              <span>댓글</span>
              <span>좋아요 {likeCount}</span>
            </div>
          </div>
        </div>
        <div className="board-content-middle">
          <div className="board-content-middle-1">
            <article>
              <p>{boardContent}</p>
            </article>
          </div>
        </div>
        <div className="board-content-likebtn">
          <button type="button">
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
          <div className="category-sort">
            <button data-active={popularSort} onClick={handleToken}>
              인기순
            </button>
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
                            <button className="comment-btn">
                              <LiaCommentDots className="comment-img" />
                              <span>답글 쓰기</span>
                            </button>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="commentComment">
                      {boardComment
                        .filter(
                          (comment) => comment.upperCommentId === item.commentId
                        )
                        .map((comment) => (
                          <li key={comment.commentId} className="comment-list">
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
                                    <button className="comment-btn">
                                      <LiaCommentDots className="comment-img" />
                                      <span>답글 쓰기</span>
                                    </button>
                                  </li>
                                </ul>
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
