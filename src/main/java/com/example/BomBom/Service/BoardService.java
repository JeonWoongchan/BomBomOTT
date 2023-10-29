package com.example.BomBom.Service;

import com.example.BomBom.Repository.mybatis.BoardMapper;
import com.example.BomBom.domain.board.Board;
import com.example.BomBom.domain.board.BoardComment;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.servlet.http.HttpSession;
import java.io.File;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class BoardService {

    @Autowired
    private BoardMapper boardMapper;

    public List<Board> findItems(Board board) {

        return boardMapper.findAll(board);
    }

    public int findAllCount(Board board) {
        return boardMapper.findAllCount(board);
    };

    public void write(Board board, MultipartFile file, HttpSession session) throws Exception {

        String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";

        UUID uuid = UUID.randomUUID();

        if (file != null) {
            String fileName = uuid + "_" + file.getOriginalFilename();

            System.out.println("filename : " + file.getOriginalFilename());

            if (!"".equals(file.getOriginalFilename())) {
                System.out.println(">>> projectPath : " + projectPath);

                File saveFile = new File(projectPath, fileName);

                file.transferTo(saveFile);

                board.setFilename(fileName);
                board.setFilepath("/files/" + fileName);
            } else {
                board.setFilename("");
                board.setFilepath("");
            }
        } else {
            board.setFilename("");
            board.setFilepath("");
        }
        String sessionuserid = (String) session.getAttribute("email");
        //board.setLoginId(sessionuserid);
        board.setRegUserid(sessionuserid);

        System.out.println(">>> board : " + board.toString());

        int result = boardMapper.save(board);

        System.out.println(">>> result : " + result);
    }

    public int commentSave (BoardComment boardComment) {
        return boardMapper.commentSave(boardComment);
    }

    //public Board findById(int id, String loginId) {
    public Board findById(Board board) {
        //System.out.println(">>>> service findById id : " + id + ", loginId : " + loginId);
        //return boardMapper.boardView(id, loginId);
        return boardMapper.boardView(board);
    }

    public int updateViewCount(int id) {
        return boardMapper.updateViewCount(id);
    }

    public int addLike (int id, String loginId) {
        int likeCount = 1;
        boardMapper.updateLikeCount(id, likeCount);
        return boardMapper.addLike(id, loginId);
    }

    public int deleteLike (int id, String loginId) {
        int likeCount = -1;
        boardMapper.updateLikeCount(id, likeCount);
        return boardMapper.deleteLike(id, loginId);
    }

    public List<BoardComment> findComments(int id) {
        return boardMapper.findComments(id);
    }

    public int deleteComment (int commentId) {
        return boardMapper.deleteComment(commentId);
    }

    public void updateBoard(Board board, MultipartFile file) throws Exception {

        String projectPath = System.getProperty("user.dir") + "\\src\\main\\resources\\static\\files";

        UUID uuid = UUID.randomUUID();

        String fileName = uuid + "_" + file.getOriginalFilename();

        System.out.println("filename : " + file.getOriginalFilename());

        if (!"".equals(file.getOriginalFilename())) {
            System.out.println(">>> projectPath : " + projectPath);

            File saveFile = new File(projectPath, fileName);

            file.transferTo(saveFile);

            board.setFilename(fileName);
            board.setFilepath("/files/" + fileName);
        } else {
            System.out.println("board.getFilepath() : " + board.getFilepath());
            System.out.println("board.getFilename() : " + board.getFilename());
            System.out.println("board.getPreFilepath() : " + board.getPreFilepath());
            // 기존 파일을 삭제하는 로직 추가
            if (board.getPreFilepath() != null && board.getPreFilepath().equals("")) {
                File saveFile = new File(projectPath, board.getFilename());
                saveFile.delete();

                board.setFilename("");
                board.setFilepath("");
            }
        }
        //board.setRegUserid("hwna");

        System.out.println(">>> board : " + board.toString());

        int result = boardMapper.updateBoard(board);

        System.out.println(">>> result : " + result);
    }

    public int deleteBoard (int boradId) {
        return boardMapper.deleteBoard(boradId);
    }
}
