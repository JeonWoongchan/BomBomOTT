package com.example.BomBom.Repository.mybatis;


import com.example.BomBom.domain.Interest.Interest;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface InterestMapper {

    void addInterest(Interest interest);

    List<Interest> SelectInterest(@Param("profileId") Long profileId);


}
