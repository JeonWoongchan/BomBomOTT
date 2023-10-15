package com.example.BomBom.domain.board;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "board")
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

        private String loginId;
        private Integer likeCheck;

        public Board() {
        }

}
