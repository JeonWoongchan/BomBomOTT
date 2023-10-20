package com.example.BomBom.Repository.mybatis;

import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberRepository;
import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;

import com.example.BomBom.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.apache.ibatis.annotations.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MybatisMemberRepository implements MemberRepository {

    private final MemberMapper memberMapper;


    // 멤버 저장
    @Override
    public Member save(Member member) {
        memberMapper.save(member);
        return member;
    }


    //멤버 수정
    @Override
    public void   update(Long id, MemberUpdateDto updateParam) {
        memberMapper.update(id, updateParam);

    }



    // 자신 조회
    @Override
    public Optional<Member> findById(Long id) {
        return memberMapper.findById(id);
    }


    // 전부 조회
    @Override
    public List<Member> findAll(MemberSearchC cond) {
        return memberMapper.findAll(cond);
    }


    // 멤버 삭제
    @Override
    public void delete(Long id )
    {
        memberMapper.delete(id);
    }



    // 멤버수 조회
    @Override
    public int MemberCount() {
        return memberMapper.MemberCount();
    }





    // 로그인
    @Override
    public Optional<Boolean> login(String userid, String password) {
         return memberMapper.login(userid,password);
    }



    //이름 조회
    public  String MemberName(String user) { return memberMapper.MemberName(user);};




    // 중복아이디 체크
    public  String DupCheck(String userid) { return memberMapper.DupCheck(userid);}





    //마이페이지
    @Override
    public Optional<Member> Mypage(String sessionuserid) {
        return memberMapper.Mypage(sessionuserid);
    }

    public  int multiCheck (String userid) {
        return memberMapper.multiCheck(userid);
    }

    @Override
    public void multiAdd(String userid) {
         memberMapper.multiAdd(userid);
    }

    @Override
    public void multisub(String userid) {
        memberMapper.multisub(userid);
    }

    ;


}
