package com.example.BomBom.Repository.mybatis;


import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.domain.member.Profile;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface ProfileMapper {

    void save(Profile profile);


    List<Profile> findProfile(@Param("id")Long id);

    int  profileCount(@Param("id") Long id);


    void updateProfile(@Param("profileId") Long profileId , ProfileUpdateDto dto);


    void deleteProfile(@Param("profileId") Long profileId);


}
