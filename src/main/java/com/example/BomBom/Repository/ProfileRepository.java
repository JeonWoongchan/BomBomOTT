package com.example.BomBom.Repository;

import com.example.BomBom.domain.member.Profile;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProfileRepository {
    Profile save(Profile profile);


    List<Profile> findProfile(Long id);


    int  profileCount(Long id);

    void updateProfile (Long profileId,ProfileUpdateDto dto);

    void deleteProfile(Long profileId);
}
