package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class MemberUpdateDto {
    private String email;
    private String name;


    private String password;


    public MemberUpdateDto() {
    }


    public MemberUpdateDto(String password) {
        this.password = password;
    }

    public MemberUpdateDto(String name, String email, String password) {

        this.name = name;
        this.email = email;
        this.password = password;

    }

}