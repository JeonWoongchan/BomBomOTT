package com.example.BomBom.Service;

import com.example.BomBom.Repository.ProfileRepository;
import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ProfileServiceV1 implements ProfileService {
    private final ProfileRepository profileRepository;

    @Override
    public Profile save(Profile profile) {
        return profileRepository.save(profile);
    }

    @Override
    public List<Profile> findProfile(Long id) {
        return profileRepository.findProfile(id);
    }

    @Override
    public int profileCount(Long id) {
        return profileRepository.profileCount(id);
    }

    @Override
    public void updateProfile(Long profileId, ProfileUpdateDto dto) {
        profileRepository.updateProfile(profileId, dto);
    }

    @Override
    public void deleteProfile(Long profileId) {
        profileRepository.deleteProfile(profileId);
    }
}
