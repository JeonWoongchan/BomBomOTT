package com.example.BomBom.Service;



import com.example.BomBom.Repository.MemberLoginDto;

import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.domain.member.Member;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    Member save(Member item);

    void update(Long memberId, MemberUpdateDto dto);

    Optional<Member> findById(Long id);
    Optional<Member> Mypage(String usersessionid);
    List<Member> findMemberName(MemberSearchC itemSearch);

    void delete(Long id);

    int MemberCount();



    Optional<Boolean> login(MemberLoginDto dto);

    String MemberName(String user);

    Optional<String> DupCheck(String email);


    int multiCheck(String email);

    void multiAdd(String email);

    void multisub(String email);

    void EndUpdatedevice();


    void UpdatePassword(String email, String dto);
    void UpdateEmail(String email, MemberUpdateDto dto);

    String SelectPassword(String email);

    Long FindId(String email);

    void payment(String email, MemberUpdateDto dto);


}
