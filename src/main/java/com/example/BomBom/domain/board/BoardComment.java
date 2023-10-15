package com.example.BomBom.domain.board;


import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Data
@Getter
@Setter
@Entity
@Table(name = "board_comment")
public class BoardComment {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer commentId;
        private Integer boardId;
        private Integer upperCommentId;
        private String content;
        private String regUserid;
        private String regDate;

        private String loginId;

        public BoardComment() {
        }

}
