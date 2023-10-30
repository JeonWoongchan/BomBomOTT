package com.example.BomBom.web;


import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.Repository.ProfileUpdateDto;
import com.example.BomBom.Service.InterestService;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.Service.ProfileService;
import com.example.BomBom.domain.Interest.Interest;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import java.util.Random;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/content")
@RequiredArgsConstructor
@RestController
public class InterestController   {

    private final InterestService interestService;
@PostMapping("/*")
    public ResponseEntity<Map<String,Object>> addInterest(@RequestBody Interest interest) {

    Map<String, Object> responseMap = new HashMap<>();

    interestService.addInterest(interest);

    responseMap.put("status",1);
    return ResponseEntity.ok(responseMap);

}






}
