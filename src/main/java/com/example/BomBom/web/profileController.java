package com.example.BomBom.web;


import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.Service.ProfileService;
import com.example.BomBom.domain.member.Member;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.*;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/profile")
@RequiredArgsConstructor
@RestController
public class profileController {


    private final MemberService memberService;
    private final ProfileService profileService;
   @PostMapping("/add-profile")
    public ResponseEntity<Map<String,Object>> addProfile(@RequestBody Profile profile, HttpSession session) {


       Map<String, Object> responseMap = new HashMap<>();
       Long id = (Long) session.getAttribute("randomValue");
       profile.setProfile_id(id);

       profileService.save(profile);




       responseMap.put("status",-1);
       return ResponseEntity.ok(responseMap);




   }



    @PostMapping("/account/past-password")
    public ResponseEntity<Map<String,Object>> passwordChange(@RequestBody Member member, MemberLoginDto dto, HttpSession session) {

        String email = (String) session.getAttribute("email");

        String Pastpassword =  memberService.SelectPassword(email);
        String inputpassword =  dto.getPassword();
        Map<String, Object> responseMap = new HashMap<>();
        if (Pastpassword.equals(inputpassword)) {
            responseMap.put("status",1);
            session.setAttribute("inputpassword",inputpassword);
            return ResponseEntity.ok(responseMap);
        } else {
            responseMap.put("status",-1);
            return ResponseEntity.ok(responseMap);
        }


    }




    @PostMapping("/account/change-password")
    public ResponseEntity<Map<String,Object>> passwordChange(@RequestBody MemberUpdateDto dto, HttpSession session) {

        String inputpassword =(String) session.getAttribute("inputpassword");
        Map<String, Object> responseMap = new HashMap<>();
        if (inputpassword == null) {
                responseMap.put("status",-1);
                return  ResponseEntity.ok(responseMap);
        } else {
            String email = (String) session.getAttribute("email");
            memberService.UpdatePassword(email,dto);

            responseMap.put("status",1);
            return  ResponseEntity.ok(responseMap);

        }




//힝






    }


}
