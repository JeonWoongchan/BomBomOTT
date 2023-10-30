package com.example.BomBom.Repository;

import com.example.BomBom.domain.Interest.Interest;
import com.example.BomBom.domain.member.Member;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

public interface InterestRepository {





    Interest addInterest(Interest interest);

    List<Interest> SelectInterest(Long profileId);

}
