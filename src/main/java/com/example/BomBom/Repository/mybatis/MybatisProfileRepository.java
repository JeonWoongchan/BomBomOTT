package com.example.BomBom.Repository.mybatis;

import com.example.BomBom.Repository.ProfileRepository;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class MybatisProfileRepository implements ProfileRepository {

    private final ProfileMapper profileMapper;
    @Override
    public Profile save(Profile profile) {
        profileMapper.save(profile);
        return profile;
    }
}
