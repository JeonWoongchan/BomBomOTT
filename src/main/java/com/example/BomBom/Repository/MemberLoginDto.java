package com.example.BomBom.Repository;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberLoginDto {



    private String userid;
    private String password;


    public MemberLoginDto() {
    }

    public MemberLoginDto(String userid, String password) {
        this.userid = userid;
        this.password = password;
    }


    public MemberLoginDto(String userid) {
        this.userid = userid;

    }


}
