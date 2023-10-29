package com.example.BomBom.web;


import com.example.BomBom.Service.BoardService;
import com.example.BomBom.domain.board.Board;
import com.example.BomBom.domain.board.BoardComment;
import lombok.RequiredArgsConstructor;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;

    @PostMapping("/list")
    public ResponseEntity<Map<String,Object>> boardList(@RequestBody Board board, HttpSession session, HttpServletRequest request ) {

        System.out.println(">> board 2 : " + board.toString());

        String sessionuserid = (String) session.getAttribute("email");

        System.out.println(">> sessionuserid 2 : " + sessionuserid);

        int totalRecordCount;     // 전체 데이터 수
        int limitStart;           // LIMIT 시작 위치
        boolean existPrevPage;    // 이전 페이지 존재 여부
        boolean existNextPage;    // 다음 페이지 존재 여부
        int currPage;
        // 현재 페이지 번호
        /*System.out.println(">> currPage : " + request.getParameter("currPage"));
        if (request.getParameter("currPage") != null && !"".equals(request.getParameter("currPage"))) {
            currPage = Integer.parseInt(request.getParameter("currPage").toString());
        } else {
            currPage = 1;
        }*/

        currPage = board.getPage();
        int recordSize = 10;     // 한 화면에 표시할 갯수
        System.out.println(">> currPage : " + currPage);

        // 검색 조건은 나중에
        totalRecordCount = boardService.findAllCount(board);

        System.out.println(">> totalRecordCount : " + totalRecordCount);

        System.out.println(">> board 3 : " + board.toString());

        // LIMIT 시작 위치 계산
        limitStart = (currPage - 1) * recordSize;

        // 이전 페이지 존재 여부 확인
        existPrevPage = currPage != 1;

        // 다음 페이지 존재 여부 확인
        existNextPage = (currPage * recordSize) < totalRecordCount;

        board.setLimitStart(limitStart);
        board.setRecordSize(recordSize);

        //board.setExistPrevPage(existPrevPage);
        //board.setExistNextPage(existNextPage);

        List<Board> boardList = boardService.findItems(board);
        board.setLoginId(sessionuserid);

        System.out.println(">> boardList : " + boardList.size());
        System.out.println(">> boardList : " + boardList.toString());
        System.out.println(">> board last : " + board.toString());

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("status", 1);
        responseMap.put("boardList", boardList);
        //responseMap.put("board", board);
        responseMap.put("currPage", currPage);
        responseMap.put("existPrevPage", existPrevPage);
        responseMap.put("existNextPage", existNextPage);

        return  ResponseEntity.ok(responseMap);
    }

    /*@GetMapping("/write")
    public String addForm() {
        return "board/Form/boardWrite";
    }*/

    @PostMapping("/write")
    //public ResponseEntity<Map<String, Object>> boardWrite(@RequestBody Board board, MultipartFile file, HttpSession session) {
    public ResponseEntity<Map<String, Object>> boardWrite(@ModelAttribute Board board, @RequestParam(value = "file", required = false) MultipartFile file, HttpSession session) throws ServletException, IOException {
        Map<String, String> resultMap = new HashMap<>();
        int result = -1;
        try {
            System.out.println(">> [boardWrite] board : " + board.toString());

            System.out.println("multipartFile = {}" + file);

            if (file != null) {
                System.out.println("multipartFile = {}" + file);
                boardService.write(board, file, session);
            } else {
                boardService.write(board, null, session); // 파일이 없는 경우 null로 처리
            }

            //boardService.write(board, file, session);
            result = 1;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //redirectAttributes.addAttribute("memberId", savedMember.getId());
        //redirectAttributes.addAttribute("status", true);
        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("status", result);

        return  ResponseEntity.ok(responseMap);
    }

    /**
     * 리스트에서 호출할 때
     * @param id
     * @param model
     * @return
     */
    @GetMapping("/view/{id}")
    public ResponseEntity<Map<String, Object>> boardView(@PathVariable int id, HttpSession session) {
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

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("board", board);
        responseMap.put("boardComment", commentList);
        responseMap.put("commentCount", commentCount);

        return  ResponseEntity.ok(responseMap);
    }

    //화면 다시띄우려고 만들어둠
    @GetMapping("/detail/{id}")
    public String boardDetail(@RequestBody @PathVariable int id, Model model, HttpSession session) {
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

    @PostMapping("/like/{id}")
    public ResponseEntity<Map<String, Object>> likeBoard(@PathVariable("id") Integer id, HttpSession session) {

        String loginId = (String) session.getAttribute("email");

        System.out.println(">> likeBoard id : " + id + ", loginId : " + loginId);
        int likeCheck = boardService.selectLike(id, loginId);

        if (likeCheck == 0) {
            System.out.println("addLike");
            boardService.addLike(id, loginId);
        } else {
            System.out.println("deleteLike");
            boardService.deleteLike(id, loginId);
        }

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("result", 200);

        return  ResponseEntity.ok(responseMap);
    }

    /**
     * 댓글쓰기
     * @param requestJsonHashMap
     * @param session
     * @return
     */
    @PostMapping("/comment/save")
    public ResponseEntity<Map<String, Object>> commentSave(@RequestBody HashMap<String, Object> requestJsonHashMap, HttpSession session) {

        String loginId = (String) session.getAttribute("email");

        System.out.println(">> requestJsonHashMap : " + requestJsonHashMap.toString());

        BoardComment boardComment = new BoardComment();

        boardComment.setBoardId(Integer.parseInt(requestJsonHashMap.get("boardId").toString()));
        boardComment.setUpperCommentId(Integer.parseInt(requestJsonHashMap.get("upperCommentId").toString()));
        boardComment.setContent(requestJsonHashMap.get("content").toString());
        boardComment.setRegUserid(loginId);

        System.out.println(">> boardComment : " + boardComment.toString());

        boardService.commentSave(boardComment);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("result", 200);

        return  ResponseEntity.ok(responseMap);
    }

    @PostMapping("/comment/delete/{boardId}/{commentId}")
    public ResponseEntity<Map<String, Object>> deleteComment(@PathVariable("boardId") Integer boardId, @PathVariable("commentId") Integer commentId) {

        System.out.println(">> [deleteComment] boardId : " + boardId + ", commentId : " + commentId);
        boardService.deleteComment(commentId);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("result", 200);

        return  ResponseEntity.ok(responseMap);
    }

//    @GetMapping("/update/{id}")
//    public ResponseEntity<Map<String, Object>> updateForm(@PathVariable int id, Model model, HttpSession session) {
//
//        System.out.println(">> boardView  id: " + id);
//
//        String loginId = (String) session.getAttribute("email");
//
//        Board board = new Board();
//        board.setId(id);
//        board.setLoginId(loginId);
//        //Board board = boardService.findById(id, loginId);
//        board = boardService.findById(board);
//        System.out.println(">> board 1 : " + board.toString());
//
//        model.addAttribute("board", board);
//
//        Map<String, Object> responseMap = new HashMap<>();
//        responseMap.put("board", board);
//
//        return  ResponseEntity.ok(responseMap);
//    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Map<String, Object>> boardUpdate(@PathVariable int id, @ModelAttribute Board board, @RequestParam(value = "file", required = false) MultipartFile file, RedirectAttributes redirectAttributes) throws ServletException, IOException {
        System.out.println(" boardUpdate : " + board.toString());
        int result = -1;
        try {
            if (file != null) {
                boardService.updateBoard(board, file);
            } else {
                boardService.updateBoard(board, null); // 파일이 없는 경우 null로 처리
            }
            //boardService.updateBoard(board, file);
            result = 1;
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //redirectAttributes.addAttribute("memberId", savedMember.getId());
        //redirectAttributes.addAttribute("status", true);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("status", result);

        return  ResponseEntity.ok(responseMap);
    }

    @PostMapping("/delete/{boardId}")
    public ResponseEntity<Map<String, Object>> deleteBoard(@PathVariable("boardId") Integer boardId) {

        System.out.println(">> [deleteBoard] boardId : " + boardId);
        boardService.deleteBoard(boardId);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("result", 200);

        return  ResponseEntity.ok(responseMap);
    }

}