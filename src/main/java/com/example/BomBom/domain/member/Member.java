package com.example.BomBom.domain.member;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;


import javax.persistence.Entity;
import java.util.Date;

@Getter
@Setter
@Entity
@Table(name = "member")
public class Member {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;
        private String userid;
        private String email;
        private String name;



        public Member() {
        }


        public Member(String userid, String email, String name) {
                this.userid = userid;
                this.email = email;
                this.name = name;
        }
}
