package com.example.BomBom.Service;



import com.example.BomBom.Repository.MemberLoginDto;

import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.domain.member.Member;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    Member save(Member item);

    void update(Long memberId, MemberUpdateDto updateParam);

    Optional<Member> findById(Long id);
    Optional<Member> Mypage(String usersessionid);
    List<Member> findMemberName(MemberSearchC itemSearch);

    void delete(Long id);

    int MemberCount();



    Optional<Boolean> login(MemberLoginDto dto);

    String MemberName(String user);

    String DupCheck(String userid);


    int multiCheck(String userid);

    void multiAdd(String userid);

    void multisub(String userid);

}
