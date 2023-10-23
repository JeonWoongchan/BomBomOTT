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
    Optional<Boolean>  login(@Param("userid") String userid, @Param("password") String password);


    // 다중 접속
    int multiCheck (@Param("userid") String userid);



    // 멤버 이름
    String MemberName(@Param("userid") String userid);



    // 회원  중복 찾기
    String DupCheck(@Param("userid") String userid);

    void multiAdd(@Param("userid") String userid);

    void multisub(@Param("userid") String userid);

    void EndUpdatedevice();


}