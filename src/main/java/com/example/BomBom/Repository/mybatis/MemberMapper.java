package com.example.BomBom.Repository.mybatis;



import com.example.BomBom.Repository.MemberLoginDto;

import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.domain.member.Member;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface MemberMapper {



    //멤버 삽입
    void save(Member member);

    // 멤버 수정
    void update(@Param("id") Long id, @Param("updateParam") MemberUpdateDto updateParam);

    void UpdatePassword(@Param("email") String email, @Param("updateParam") MemberUpdateDto updateParam);

    String SelectPassword(@Param("email") String email);


    // 자신 조회

    Optional<Member> findById(Long id);


    // 마이페이지
    Optional<Member> Mypage(String sessionuserid);





     //전부 조회
    List<Member> findAll(MemberSearchC memberSearchc);

    // 멤버 삭제
    void delete(Long id);




    // 멤버수 조회

    int MemberCount();


    // 로그인
    Optional<Boolean>  login(@Param("email") String email, @Param("password") String password);


    // 다중 접속
    int multiCheck (@Param("email") String email);



    // 멤버 이름
    String MemberName(@Param("email") String email);



    // 회원  중복 찾기
    Optional<String> DupCheck(@Param("email") String email);

    void multiAdd(@Param("email") String email);

    void multisub(@Param("email") String email);

    void EndUpdatedevice();

    int FindId(@Param("email") String email);


    void payment(@Param("email") String email,MemberUpdateDto updateParam);

}