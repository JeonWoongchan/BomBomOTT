package com.example.BomBom.Repository.mybatis;


import com.example.BomBom.domain.member.Profile;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface ProfileMapper {

    void save(Profile profile);





}
