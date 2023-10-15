package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class MemberSearchC {


    private String id;
    private String name;


    public MemberSearchC() {
    }

    public MemberSearchC(String name) {
        this.name = name;
    }
}
