package com.example.BomBom.Service;

import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.domain.Interest.Interest;
import com.example.BomBom.domain.member.Profile;

import java.util.List;

public interface InterestService {

    Interest addInterest(Interest interest);

    List<Interest> SelectInterest(Long profileId);
}
