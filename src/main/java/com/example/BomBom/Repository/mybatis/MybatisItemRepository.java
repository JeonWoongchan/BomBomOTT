package com.example.BomBom.Repository.mybatis;

import com.example.BomBom.Repository.MemberRepository;
import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;

import com.example.BomBom.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
@RequiredArgsConstructor
public class MybatisItemRepository implements MemberRepository {

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
    };

}
