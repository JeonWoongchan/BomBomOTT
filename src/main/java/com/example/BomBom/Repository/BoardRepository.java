package com.example.BomBom.Repository;


import com.example.BomBom.domain.board.Board;

import java.util.List;





public interface BoardRepository {
    List<Board> findAll(Board board);

}
