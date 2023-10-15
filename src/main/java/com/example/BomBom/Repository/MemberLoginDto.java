package com.example.BomBom.Repository;

public class MemberLoginDto {



    private String userid;
    private String password;


    public MemberLoginDto() {
    }

    public MemberLoginDto(String userid, String password) {
        this.userid = userid;
        this.password = password;
    }
}
