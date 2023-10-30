package com.example.BomBom.Service;


import com.example.BomBom.Repository.*;
import com.example.BomBom.domain.Interest.Interest;
import com.example.BomBom.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@RequiredArgsConstructor
public class InterestServiceV1 implements InterestService {

    private final InterestRepository interestRepository;



    @Override
    public Interest addInterest(Interest interest) {
        return interestRepository.addInterest(interest);
    }

    @Override
    public List<Interest> SelectInterest(Long profileId) {
        return interestRepository.SelectInterest(profileId);
    }
}
