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
    private Long profile_id;
    private Long id;
    private String profile_name;
    private  String profile_img;


    public Profile(Long id, String profile_name, String profile_img) {
        this.id = id;
        this.profile_name = profile_name;
        this.profile_img = profile_img;
    }

    public Profile() {
    }
}
