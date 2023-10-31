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
        private String email;

        private String password;
        private String name;
        private String payment;



        public Member() {
        }


        public Member(String email, String name, String password, String payment) {

                this.email = email;
                this.name = name;
                this.password = password;
                this.payment = payment;

        }
}
