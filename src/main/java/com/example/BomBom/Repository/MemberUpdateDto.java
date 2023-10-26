package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class MemberUpdateDto {
    private String email;
    private String name;
    private String password;
    private String payment;

    public MemberUpdateDto() {
    }


    public MemberUpdateDto(String password) {
        this.password = password;
    }



    public MemberUpdateDto(String name, String email, String password, String payment) {

        this.name = name;
        this.email = email;
        this.password = password;
        this.payment = payment;
    }





}