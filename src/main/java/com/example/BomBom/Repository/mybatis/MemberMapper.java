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
    void save(Member member);

    void   update(@Param("id") Long id, @Param("updateParam") MemberUpdateDto
            updateParam);

    Optional<Member> findById(Long id);


    Optional<Member> Mypage(String sessionuserid);


    List<Member> findAll(MemberSearchC memberSearchc);

    void delete(Long id);






    int MemberCount();



    Optional<Boolean>  login(@Param("userid") String userid, @Param("password") String password);


    String MemberName(@Param("userid") String userid);




    String AddDup(@Param("userid") String userid);


}