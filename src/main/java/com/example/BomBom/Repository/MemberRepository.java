package com.example.BomBom.Repository;

import com.example.BomBom.domain.member.Member;


import java.util.List;
import java.util.Optional;

public interface MemberRepository {

    Member save(Member member);

    void update(Long id, MemberUpdateDto updateParam);

    Optional<Member> findById(Long id);

    List<Member> findAll(MemberSearchC cond);

    void delete(Long id);



    int MemberCount();


    Optional<Boolean>  login(String userid, String password);



}
