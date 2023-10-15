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

    List<Board> findAll(Board board);

    int save(Board board);

    Board findById(int id, String loginId);

    int updateViewCount(int id);

    int updateLikeCount(int id, int likeCount);

    int addLike(int id, String loginId);

    int deleteLike(int id, String loginId);

    List<BoardComment> findComments(int id);

    int commentSave(BoardComment boardComment);

    int deleteComment(int commentId);

    int updateBoard(Board board);

    int deleteBoard(int boardId);

}