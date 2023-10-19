package com.example.BomBom.Service;


import com.example.BomBom.Repository.MemberLoginDto;

import com.example.BomBom.Repository.MemberRepository;

import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class MemberServiceV1 implements MemberService {

    private final MemberRepository memberRepository;

    @Override
    public Member save(Member member) {
        return memberRepository.save(member);
    }

    @Override
    public void update(Long memberId, MemberUpdateDto updateParam) {
        memberRepository.update(memberId, updateParam);
    }

    @Override
    public Optional<Member> findById(Long id) {
        return memberRepository.findById(id);
    }

    @Override
    public Optional<Member> Mypage(String usersessionid) {
        return memberRepository.Mypage(usersessionid);
    }

    @Override
    public List<Member> findMemberName(MemberSearchC cond) {
        return memberRepository.findAll(cond);
    }


    public void delete(Long id) {
        memberRepository.delete(id);
    }

    @Override
    public int MemberCount() {
        return memberRepository.MemberCount();
    }

    @Override
    public Optional<Boolean> login(MemberLoginDto dto) {
        return memberRepository.login(dto.getUserid(), dto.getPassword());
    }


    @Override
    public String MemberName(String user) {
        return memberRepository.MemberName(user);
    }

    @Override
    public String AddDup(String userid) {
        return memberRepository.AddDup(userid);
    }


}
