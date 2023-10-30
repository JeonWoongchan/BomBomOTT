package com.example.BomBom.domain.Interest;


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
@Table(name = "interest")
public class Interest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long interestId;
    private Long contentId;

    private Long profileId;
    private String mediaType;

    public Interest(Long interestId, Long contentId, Long profileId, String mediaType) {
        this.interestId = interestId;
        this.contentId = contentId;
        this.profileId = profileId;
        this.mediaType = mediaType;
    }

    public Interest() {
    }
}
