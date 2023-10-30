package com.example.BomBom.domain.member;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "profile")
public class Profile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long profileId;
    private Long id;
    private String profileName;
    private  String profileImg;

//    @Override
//    public String toString() {
//        return "Profile{" +
//                "profileId=" + profileId +
//                ", id=" + id +
//                ", profileName='" + profileName + '\'' +
//                ", profileImg='" + profileImg + '\'' +
//                '}';
//    }

    public Profile(Long profileId, Long id, String profileName, String profileImg) {
        this.profileId = profileId;
        this.id = id;
        this.profileName = profileName;
        this.profileImg = profileImg;
    }

    public Profile() {
    }
}
