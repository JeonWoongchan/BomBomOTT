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
    public void update(Long memberId, MemberUpdateDto dto) {
        memberRepository.update(memberId, dto);
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
        return memberRepository.login(dto.getEmail(), dto.getPassword());
    }


    @Override
    public String MemberName(String user) {
        return memberRepository.MemberName(user);
    }

    @Override
    public Optional<String> DupCheck(String email) {
        return memberRepository.DupCheck(email);
    }


    @Override
    public int multiCheck(String email) {
        return memberRepository.multiCheck(email);
    }

    @Override
    public void multiAdd(String email) {
        memberRepository.multiAdd(email);
    }

    @Override
    public void multisub(String email) {
        memberRepository.multisub(email);
    }

    @Override
    public void EndUpdatedevice() { memberRepository.EndUpdatedevice(); }

    @Override
    public void UpdatePassword(String email, String dto) {
        memberRepository.UpdatePassword(email, dto);
    }

    @Override
    public void UpdateEmail(String email, MemberUpdateDto dto) {
        memberRepository.UpdateEmail(email,dto);
    }

    @Override
    public String SelectPassword(String email) {
        return  memberRepository.SelectPassword(email);
    }

    @Override
    public Long FindId(String email) {
        return memberRepository.FindId(email);
    }

    @Override
    public void payment(String email, MemberUpdateDto dto) {
        memberRepository.payment(email, dto);
    }


}
