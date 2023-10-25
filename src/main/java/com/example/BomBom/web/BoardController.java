package com.example.BomBom.web;


import com.example.BomBom.Service.BoardService;
import com.example.BomBom.domain.board.Board;
import com.example.BomBom.domain.board.BoardComment;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @GetMapping("/list")
    public String boardList(@ModelAttribute("Board") Board board, Model model, HttpSession session) {

        System.out.println(">> board 1 : " + board.toString());

        System.out.println(">> page : " + board.getPage());
        System.out.println(">> RecordSize : " + board.getRecordSize());

        //board.setOffset(0);
        //board.setRecordSize(10);

        System.out.println(">> board 2 : " + board.toString());

        String sessionuserid = (String) session.getAttribute("email");

        System.out.println(">> sessionuserid 2 : " + sessionuserid);

        int totalRecordCount;     // 전체 데이터 수
        int totalPageCount;       // 전체 페이지 수
        int startPage;            // 첫 페이지 번호
        int endPage;              // 끝 페이지 번호
        int limitStart;           // LIMIT 시작 위치
        boolean existPrevPage;    // 이전 페이지 존재 여부
        boolean existNextPage;    // 다음 페이지 존재 여부

        totalRecordCount = boardService.findAllCount(board);

        System.out.println(">> totalRecordCount : " + totalRecordCount);

        System.out.println(">> board 3 : " + board.toString());

        // 전체 페이지 수 계산
        totalPageCount = ((totalRecordCount - 1) / board.getRecordSize()) + 1;

        System.out.println(">> totalPageCount : " + totalPageCount);

        // 현재 페이지 번호가 전체 페이지 수보다 큰 경우, 현재 페이지 번호에 전체 페이지 수 저장
        if (board.getPage() > totalPageCount) {
            board.setPage(totalPageCount);
        }

        // 첫 페이지 번호 계산
        startPage = ((board.getPage() - 1) / board.getPageSize()) * board.getPageSize() + 1;

        // 끝 페이지 번호 계산
        endPage = startPage + board.getPageSize() - 1;

        // 끝 페이지가 전체 페이지 수보다 큰 경우, 끝 페이지 전체 페이지 수 저장
        if (endPage > totalPageCount) {
            endPage = totalPageCount;
        }

        // LIMIT 시작 위치 계산
        limitStart = (board.getPage() - 1) * board.getRecordSize();

        // 이전 페이지 존재 여부 확인
        existPrevPage = startPage != 1;

        // 다음 페이지 존재 여부 확인
        existNextPage = (endPage * board.getRecordSize()) < totalRecordCount;

        board.setLimitStart(limitStart);
        board.setStartPage(startPage);
        board.setEndPage(endPage);
        board.setTotalPageCount(totalPageCount);
        board.setExistPrevPage(existPrevPage);
        board.setExistNextPage(existNextPage);

        List<Board> boardList = boardService.findItems(board);
        board.setLoginId(sessionuserid);

        model.addAttribute("boardList", boardList);
        model.addAttribute("board", board);
        System.out.println(">> boardList : " + boardList.size());
        System.out.println(">> boardList : " + boardList.toString());
        System.out.println(">> board last : " + board.toString());
        return "board/boardList";
    }

//    @GetMapping("/list2")
//    public String boardList(@ModelAttribute("BoardSearch") BoardSearch boardSearch, Model model) {
//
//        System.out.println(">> board : " + board.toString());
//
//        board.setOffset(0);
//        board.setRecordSize(10);
//        List<Board> boardList = boardService.findItems(board);
//
//        model.addAttribute("boardList", boardList);
//        System.out.println(">> boardList : " + boardList.size());
//        System.out.println(">> boardList : " + boardList.toString());
//        return "boardList";
//    }

    @GetMapping("/write")
    public String addForm() {
        return "board/Form/boardWrite";
    }

    @PostMapping("/write")
    public String boardWrite(@ModelAttribute Board board, MultipartFile file, RedirectAttributes redirectAttributes, HttpSession session) {
        try {
            boardService.write(board, file, session);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //redirectAttributes.addAttribute("memberId", savedMember.getId());
        //redirectAttributes.addAttribute("status", true);
        return "redirect:/board/list";
    }

    /**
     * 리스트에서 호출할 때
     * @param id
     * @param model
     * @return
     */
    @GetMapping("/view/{id}")
    public String boardView(@PathVariable int id, Model model, HttpSession session) {
        System.out.println(">> boardView  id: " + id);

        String loginId = (String) session.getAttribute("email");

        boardService.updateViewCount(id);

        Board board = new Board();
        board.setId(id);
        board.setLoginId(loginId);
        //Board board = boardService.findById(id, loginId);
        board = boardService.findById(board);
        System.out.println(">> board 1 : " + board.toString());

        board.setLoginId(loginId);
        System.out.println(">> board 2 : " + board.toString());

        // 전체 댓글 수
        // 댓글 리스트
        List<BoardComment> commentList = boardService.findComments(id);

        int commentCount = 0;
        if (commentList != null) {
            commentCount = commentList.size();
        }

        model.addAttribute("board", board);
        model.addAttribute("boardComment", commentList);
        model.addAttribute("commentCount", commentCount);
        return "board/boardView";
    }

    @GetMapping("/detail/{id}")
    public String boardDetail(@PathVariable int id, Model model, HttpSession session) {
        System.out.println(">> boardView  id: " + id);
        String loginId = (String) session.getAttribute("email");

        Board board = new Board();
        board.setId(id);
        board.setLoginId(loginId);
        //Board board = boardService.findById(id, loginId);
        board = boardService.findById(board);
        board.setLoginId(loginId);
        System.out.println(">> board 1 : " + board.toString());

        // 전체 댓글 수
        // 댓글 리스트
        List<BoardComment> commentList = boardService.findComments(id);

        int commentCount = 0;
        if (commentList != null) {
            commentCount = commentList.size();
        }

        model.addAttribute("board", board);
        model.addAttribute("boardComment", commentList);
        model.addAttribute("commentCount", commentCount);
        return "board/boardView";
    }

    @PostMapping("/like/{id}/{likeCheck}")
    public String likeBoard(@PathVariable("id") Integer id, @PathVariable("likeCheck") Integer likeCheck, HttpSession session) {

        String loginId = (String) session.getAttribute("email");

        System.out.println(">> likeBoard id : " + id + ", loginId : " + loginId + ", likeCheck : " + likeCheck);
        if (likeCheck == 0) {
            System.out.println("addLike");
            boardService.addLike(id, loginId);
        } else {
            System.out.println("deleteLike");
            boardService.deleteLike(id, loginId);
        }

        HashMap<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", 200);
        return "redirect:/board/detail/" + id;
    }

    @PostMapping("/comment/save")
    public String commentSave(@RequestBody HashMap<String, Object> requestJsonHashMap, HttpSession session) {

        String loginId = (String) session.getAttribute("email");

        System.out.println(">> requestJsonHashMap : " + requestJsonHashMap.toString());

        BoardComment boardComment = new BoardComment();

        boardComment.setBoardId(Integer.parseInt(requestJsonHashMap.get("boardId").toString()));
        boardComment.setUpperCommentId(Integer.parseInt(requestJsonHashMap.get("upperCommentId").toString()));
        boardComment.setContent(requestJsonHashMap.get("content").toString());
        boardComment.setRegUserid(loginId);

        System.out.println(">> boardComment : " + boardComment.toString());

        boardService.commentSave(boardComment);

        return "redirect:/board/detail/" + boardComment.getBoardId();
    }

    @PostMapping("/comment/delete/{boardId}/{commentId}")
    public String deleteComment(@PathVariable("boardId") Integer boardId, @PathVariable("commentId") Integer commentId) {

        System.out.println(">> [deleteComment] boardId : " + boardId + ", commentId : " + commentId);
        boardService.deleteComment(commentId);

        return "redirect:/board/detail/" + boardId;
    }

    @GetMapping("/update/{id}")
    public String updateForm(@PathVariable int id, Model model, HttpSession session) {

        System.out.println(">> boardView  id: " + id);

        String loginId = (String) session.getAttribute("email");

        Board board = new Board();
        board.setId(id);
        board.setLoginId(loginId);
        //Board board = boardService.findById(id, loginId);
        board = boardService.findById(board);
        System.out.println(">> board 1 : " + board.toString());

        model.addAttribute("board", board);
        return "board/Form/boardUpdate";
    }

    @PostMapping("/update/{id}")
    public String boardUpdate(@PathVariable int id, @ModelAttribute Board board, MultipartFile file, RedirectAttributes redirectAttributes) {
        System.out.println(" boardUpdate : " + board.toString());
        try {
            boardService.updateBoard(board, file);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //redirectAttributes.addAttribute("memberId", savedMember.getId());
        //redirectAttributes.addAttribute("status", true);
        return "redirect:/board/detail/" + board.getId();
    }

    @PostMapping("/delete/{boardId}")
    public String deleteBoard(@PathVariable("boardId") Integer boardId) {

        System.out.println(">> [deleteBoard] boardId : " + boardId);
        boardService.deleteBoard(boardId);

        return "forword:/board/list";
    }

}
