package com.example.BomBom.Repository.mybatis;

import com.example.BomBom.Repository.InterestRepository;
import com.example.BomBom.Repository.ProfileRepository;
import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.domain.Interest.Interest;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MybatisInterestRepository implements InterestRepository {

    private final InterestMapper interestMapper;

    @Override
    public Interest addInterest(Interest interest) {
        interestMapper.addInterest(interest);
        return interest;
    }

    @Override
    public List<Interest> SelectInterest(Long profileId) {
        return interestMapper.SelectInterest(profileId);
    }
}
