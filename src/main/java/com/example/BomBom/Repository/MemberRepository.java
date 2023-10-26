package com.example.BomBom.Repository;

import com.example.BomBom.domain.member.Member;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

public interface MemberRepository {


    //멤버 저장
    Member save(Member member);

    // 멤버 수정
    void update(Long id, MemberUpdateDto updateParam);

    // 자신 조회
    Optional<Member> findById(Long id);


    // 전부 조회
    List<Member> findAll(MemberSearchC cond);


    // 멤버 삭제
    void delete(Long id);




    // 멤버수 조회
    int MemberCount();



    // 로그인
    Optional<Boolean>  login(String userid, String password);

    // 멤버 이름
    String MemberName( String userid);




    Optional<String> DupCheck(String userid);


    Optional<Member> Mypage(String sessionuserid);

    // 다중 접속

    int multiCheck (@Param("userid") String userid);

    void multiAdd(@Param("userid") String userid);

    void multisub(@Param("userid") String userid);

    void EndUpdatedevice();
}
