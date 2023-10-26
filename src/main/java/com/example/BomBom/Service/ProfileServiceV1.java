package com.example.BomBom.Service;

import com.example.BomBom.Repository.ProfileRepository;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProfileServiceV1 implements ProfileService {
    private final ProfileRepository profileRepository;

    @Override
    public Profile save(Profile profile) {
        return profileRepository.save(profile);
    }
}
