package com.example.BomBom.Service;


import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.domain.member.Member;

import java.util.List;
import java.util.Optional;

public interface MemberService {

    Member save(Member item);

    void update(Long memberId, MemberUpdateDto updateParam);

    Optional<Member> findById(Long id);

    List<Member> findItems(MemberSearchC itemSearch);

    void delete(Long id);
}