package com.example.BomBom.Service;

import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.domain.member.Member;
import com.example.BomBom.domain.member.Profile;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ProfileService {

    Profile save(Profile profile);


    List<Profile> findProfile(Long id);

    int  profileCount(Long id);


    void updateProfile(Long profileId , ProfileUpdateDto dto );


    void deleteProfile(Long profileId);
}
