package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class IdentifierDTO {
    public IdentifierDTO() {
    }

    public IdentifierDTO(String identifier) {
        Identifier = identifier;
    }

    private String Identifier;
}
