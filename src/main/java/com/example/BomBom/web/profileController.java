package com.example.BomBom.web;


import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.Service.ProfileService;
import com.example.BomBom.domain.member.Member;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpSession;
import java.util.*;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/profile")
@RequiredArgsConstructor
@RestController
public class profileController implements WebMvcConfigurer {

    private final MemberService memberService;
    private final ProfileService profileService;
   @PostMapping("/add-profile")
    public ResponseEntity<Map<String,Object>> addProfile(@RequestBody Profile profile, HttpSession session) {

       Long id = (Long) session.getAttribute("id");

       Map<String, Object> responseMap = new HashMap<>();
       Random random = new Random();

       long min = 10000000L;  // 1,000,000부터 시작 (7자리)
       long max = 99999999L;   // 99,999,999까지 (8자리)
       long randomValue = min + Math.abs(random.nextLong()) % (max - min + 1);

       profile.setProfileId(randomValue);
       profile.setId(id);

       profileService.save(profile);

       responseMap.put("status", 1);
       return ResponseEntity.ok(responseMap);

   }

    @PostMapping("/edit-profileInfo")
    public ResponseEntity<Map<String,Object>>  editProfile(@RequestBody ProfileUpdateDto dto, HttpSession session) {



        Map<String, Object> responseMap = new HashMap<>();
        Long profileId= dto.getProfileId();
        profileService.updateProfile(profileId, dto);

        responseMap.put("status", 1);
        return ResponseEntity.ok(responseMap);

    }

    @PostMapping("/delete-profileInfo")
    public ResponseEntity<Map<String,Object>>  deleteProfile(@RequestBody Profile profile, HttpSession session) {


        Map<String, Object> responseMap = new HashMap<>();
        Long profileId= profile.getProfileId();
        profileService.deleteProfile(profileId);

        responseMap.put("status", 1);
        return ResponseEntity.ok(responseMap);

    }






    @PostMapping("/account/change-email")
    public ResponseEntity<Map<String,Object>> ChangeEmail(@RequestBody MemberUpdateDto dto, HttpSession session) {

        String email = (String) session.getAttribute("email");
        String Pastpassword =  memberService.SelectPassword(email);


        String inputpassword =  dto.getPassword();
        Map<String, Object> responseMap = new HashMap<>();
        if (Pastpassword.equals(inputpassword)) {

            memberService.UpdateEmail(email,dto);
            responseMap.put("status",1);

            return ResponseEntity.ok(responseMap);
        } else {
            responseMap.put("status",-1);
            return ResponseEntity.ok(responseMap);
        }


    }
    @PostMapping("/account/regist-payment")
    public ResponseEntity<Map<String,Object>> ChangeAccount(@RequestBody MemberUpdateDto dto, HttpSession session) {

        String email = (String) session.getAttribute("email");
        String Pastpassword =  memberService.SelectPassword(email);


        String inputpassword =  dto.getPassword();
        Map<String, Object> responseMap = new HashMap<>();
        if (Pastpassword.equals(inputpassword)) {

            memberService.payment(email,dto);
            responseMap.put("status",1);

            return ResponseEntity.ok(responseMap);
        } else {
            responseMap.put("status",-1);
            return ResponseEntity.ok(responseMap);
        }


    }

    @PostMapping("/account/reset-password")
    public ResponseEntity<Map<String,Object>> ChangePassword(@RequestBody MemberUpdateDto dto, HttpSession session) {

        String email = (String) session.getAttribute("email");
        String Pastpassword = memberService.SelectPassword(email);

        String newPassword = dto.getNewPassword();
        String inputPassword = dto.getPassword(); // 사용자가 입력한 새로운 비밀번호

        Map<String, Object> responseMap = new HashMap<>();

        if (Pastpassword.equals(inputPassword)) {
            memberService.UpdatePassword(email, newPassword);
            responseMap.put("status", 1);
            return ResponseEntity.ok(responseMap);
        } else {
            responseMap.put("status", -1);
            responseMap.put("newPassword", newPassword);
            responseMap.put("inputPassword", inputPassword);
            return ResponseEntity.ok(responseMap);
        }
    }








}
