package com.example.BomBom.config;


import com.example.BomBom.Repository.MemberRepository;
import com.example.BomBom.Repository.mybatis.MemberMapper;


import com.example.BomBom.Repository.mybatis.MybatisMemberRepository;

import com.example.BomBom.Service.BoardService;

import com.example.BomBom.Service.MemberService;
import com.example.BomBom.Service.MemberServiceV1;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@RequiredArgsConstructor
public class MyBatisConfig {

    private final MemberMapper memberMapper;


    @Bean

    public MemberService memberService() {
        return new MemberServiceV1(memberRepository());
        }

    @Bean
    public MemberRepository memberRepository() {
        return new MybatisMemberRepository(memberMapper) {
            @Override
            public void EndUpdatedevice() {

            }
        };
    }
    @Bean
    public BoardService boardService () {
            return new BoardService();
    }


}

