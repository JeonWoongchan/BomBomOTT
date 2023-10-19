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
    @Override
    public Member save(Member member) {
        memberMapper.save(member);
        return member;
    }

    @Override
    public void   update(Long id, MemberUpdateDto updateParam) {
        memberMapper.update(id, updateParam);

    }

    @Override
    public Optional<Member> findById(Long id) {
        return memberMapper.findById(id);
    }

    @Override
    public List<Member> findAll(MemberSearchC cond) {
        return memberMapper.findAll(cond);
    }

    @Override
    public void delete(Long id )
    {
        memberMapper.delete(id);
    }

    @Override
    public int MemberCount() {
        return memberMapper.MemberCount();
    }

    @Override
    public Optional<Boolean> login(String userid, String password) {
         return memberMapper.login(userid,password);
    }

    public  String MemberName(String user) { return memberMapper.MemberName(user);};
    public  String AddDup(String userid) { return memberMapper.AddDup(userid);};


}
