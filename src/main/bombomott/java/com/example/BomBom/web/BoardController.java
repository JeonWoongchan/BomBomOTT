package com.example.BomBom.web;



import com.example.BomBom.Service.BoardService;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.domain.board.Board;
import com.example.BomBom.domain.board.BoardComment;
import com.example.BomBom.domain.board.BoardSearch;
import com.example.BomBom.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {

    private final BoardService boardService;
    private final MemberService memberService;

    @GetMapping("/list")
    public String boardList(@ModelAttribute("Board") Board board, Model model) {

        System.out.println(">> board : " + board.toString());

        board.setOffset(0);
        board.setRecordSize(10);
        List<Board> boardList = boardService.findItems(board);

        model.addAttribute("boardList", boardList);
        System.out.println(">> boardList : " + boardList.size());
        System.out.println(">> boardList : " + boardList.toString());
        return "boardList";
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
        return "boardWrite";
    }

    @PostMapping("/write")
    public String boardWrite(@ModelAttribute Board board, MultipartFile file, RedirectAttributes redirectAttributes) {
        try {
            boardService.write(board, file);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
        //redirectAttributes.addAttribute("memberId", savedMember.getId());
        //redirectAttributes.addAttribute("status", true);
        return "redirect:/board/list";
    }

    @GetMapping("/view/{id}")
    public String item(@PathVariable int id, Model model) {
        System.out.println(">> boardView  id: " + id);
        String loginId = "hwna";
        Board board = boardService.findById(id, loginId);
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
        return "boardView";
    }

    @PostMapping("/like/{id}/{likeCheck}")
    public String likeBoard(@PathVariable("id") Integer id, @PathVariable("likeCheck") Integer likeCheck) {
        String loginId = "hwna";

        System.out.println(">> likeBoard id : " + id + ", loginId : " + loginId + ", likeCheck : " + likeCheck);
        if (likeCheck == 0) {
            System.out.println("addLike");
            boardService.addLike(id, loginId);
        } else {
            System.out.println("deleteLike");
            boardService.deleteLike(id,loginId);
        }

        HashMap<String, Object> resultMap = new HashMap<>();
        resultMap.put("result", 200);
        return "redirect:/board/view/" + id;
    }

    @PostMapping("/comment/save")
    public String commentSave(@RequestBody HashMap<String, Object> requestJsonHashMap) {
        String loginId = "hwna";

        System.out.println(">> requestJsonHashMap : " + requestJsonHashMap.toString());

        BoardComment boardComment = new BoardComment();

        boardComment.setBoardId(Integer.parseInt(requestJsonHashMap.get("boardId").toString()));
        boardComment.setUpperCommentId(Integer.parseInt(requestJsonHashMap.get("upperCommentId").toString()));
        boardComment.setContent(requestJsonHashMap.get("content").toString());
        boardComment.setRegUserid(loginId);

        System.out.println(">> boardComment : " + boardComment.toString());

        boardService.commentSave(boardComment);

        return "redirect:/board/view/" + boardComment.getBoardId();
    }

    @PostMapping("/comment/delete/{boardId}/{commentId}")
    public String deleteComment(@PathVariable("boardId") Integer boardId, @PathVariable("commentId") Integer commentId) {

        System.out.println(">> [deleteComment] boardId : " + boardId + ", commentId : " + commentId);
        boardService.deleteComment(commentId);

        return "redirect:/board/view/" + boardId;
    }

}
