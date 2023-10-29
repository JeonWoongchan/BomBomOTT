package com.example.BomBom.Repository.mybatis;


import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.domain.board.Board;
import com.example.BomBom.domain.board.BoardComment;
import com.example.BomBom.domain.member.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface BoardMapper {


    // 조회
    List<Board> findAll(Board board);

    int findAllCount(Board board);

    // 삽입
    int save(Board board);

    //Board boardView(int id, String loginId);
    Board boardView(Board board);

    int updateViewCount(int id);

    int updateLikeCount(@Param("id") int id, @Param("likeCount") int likeCount);

    int addLike(@Param("id") int id, @Param("loginId") String loginId);

    int deleteLike(@Param("id") int id, @Param("loginId") String loginId);

    int selectLike(@Param("id") int id, @Param("loginId") String loginId);

    List<BoardComment> findComments(int id);

    int commentSave(BoardComment boardComment);

    int deleteComment(int commentId);

    int updateBoard(Board board);

    int deleteBoard(int boardId);

}