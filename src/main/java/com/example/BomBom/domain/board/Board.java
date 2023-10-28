package com.example.BomBom.domain.board;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Getter
@Setter
@Entity
//@Table(name = "board")
public class Board {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String title;
    private String content;
    private String filename;
    private String filepath;
    private Integer likeCount;
    private String regUserid;
    private String regDate;

    private Integer viewCount;

    private String searchType;
    private String searchKeyword;

    private Integer offset;
    private Integer recordSize;
    private Integer page;                 // 현재 페이지 번호
    private int pageSize;             // 화면 하단에 출력할 페이지 사이즈

    private String loginId;
    private Integer likeCheck;

    private int totalRecordCount;     // 전체 데이터 수
    private int totalPageCount;       // 전체 페이지 수
    private int startPage;            // 첫 페이지 번호
    private int endPage;              // 끝 페이지 번호
    private int limitStart;           // LIMIT 시작 위치
    private boolean existPrevPage;    // 이전 페이지 존재 여부
    private boolean existNextPage;    // 다음 페이지 존재 여부

    /*private Pagination pagination;    // 페이지네이션 정보*/

    private String preFilepath;
    private Integer commentCount;    // 댓글수

}
