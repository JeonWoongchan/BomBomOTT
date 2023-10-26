package com.example.BomBom.config;


import com.example.BomBom.Repository.MemberRepository;
import com.example.BomBom.Repository.mybatis.MemberMapper;


import com.example.BomBom.Repository.mybatis.MybatisMemberRepository;

import com.example.BomBom.Repository.mybatis.MybatisProfileRepository;
import com.example.BomBom.Repository.mybatis.ProfileMapper;
import com.example.BomBom.Repository.ProfileRepository;
import com.example.BomBom.Service.*;

import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class MyBatisConfig {

    private final MemberMapper memberMapper;
    private final ProfileMapper profileMapper;

    @Bean

    public MemberService memberService() {
        return new MemberServiceV1(memberRepository());
        }

    @Bean
    public MemberRepository memberRepository() {
        return new MybatisMemberRepository(memberMapper);
    }

    @Bean
    public ProfileService profileService() {
        return new ProfileServiceV1(profilerepository());
    }
    @Bean
    public ProfileRepository profilerepository() {
        return new MybatisProfileRepository(profileMapper);
    }



    @Bean
    public BoardService boardService () {
            return new BoardService();
    }


}

