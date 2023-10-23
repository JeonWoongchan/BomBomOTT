package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class MemberUpdateDto {
    private String userid;
    private String name;
    private String email;

    private String password;


    public MemberUpdateDto() {
    }



    public MemberUpdateDto(String userid, String name, String email, String password) {
        this.userid = userid;
        this.name = name;
        this.email = email;

    }

}