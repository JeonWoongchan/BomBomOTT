package com.example.BomBom.Repository.mybatis;

import com.example.BomBom.Repository.ProfileRepository;
import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@RequiredArgsConstructor
public class MybatisProfileRepository implements ProfileRepository {

    private final ProfileMapper profileMapper;
    @Override
    public Profile save(Profile profile) {
        profileMapper.save(profile);
        return profile;
    }

    @Override
    public List<Profile> findProfile(Long id) {

        return profileMapper.findProfile(id);
    }

    @Override
    public int profileCount(Long id) {
        return profileMapper.profileCount(id);
    }

    @Override
    public void updateProfile(Long profileId, ProfileUpdateDto dto) {
        profileMapper.updateProfile(profileId,dto);
    }

    @Override
    public void deleteProfile(Long profileId) {
        profileMapper.deleteProfile(profileId);
    }
}
