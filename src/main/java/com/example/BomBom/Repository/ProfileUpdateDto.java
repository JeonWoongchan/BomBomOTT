package com.example.BomBom.Repository;

import lombok.Data;

@Data
public class ProfileUpdateDto {
    private Long profileId;
    private Long id;
    private String profileName;
    private  String profileImg;


    public ProfileUpdateDto() {
    }


    public ProfileUpdateDto(String profileName, String profileImg) {
        this.profileName = profileName;
        this.profileImg = profileImg;
    }

    public ProfileUpdateDto(Long profileId, Long id, String profileName, String profileImg) {
        this.profileId = profileId;
        this.id = id;
        this.profileName = profileName;
        this.profileImg = profileImg;
    }
}