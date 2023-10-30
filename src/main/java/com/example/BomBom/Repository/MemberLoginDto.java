package com.example.BomBom.Repository;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class MemberLoginDto {



    private String email;
    private String password;


    public MemberLoginDto() {
    }

    public MemberLoginDto(String email, String password) {
        this.email = email;
        this.password = password;
    }


    public MemberLoginDto(String email) {
        this.email = email;

    }


}
