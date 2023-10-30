package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class MemberUpdateDto {
    private String email;
    private String name;
    private String password;
    private String payment;
    private String newPassword;

    public MemberUpdateDto() {
    }


    public MemberUpdateDto(String password) {
        this.password = password;
    }



    public MemberUpdateDto(String name, String email, String password, String payment, String newPassword) {

        this.name = name;
        this.email = email;
        this.password = password;
        this.payment = payment;
        this.newPassword = newPassword;
    }

}
