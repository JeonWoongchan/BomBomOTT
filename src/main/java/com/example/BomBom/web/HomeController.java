package com.example.BomBom.web;

import com.example.BomBom.Service.InterestService;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.domain.Interest.Interest;
import com.example.BomBom.domain.member.Profile;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
@RequiredArgsConstructor
public class HomeController implements WebMvcConfigurer {
    private final InterestService interestService;
    private final MemberService memberService;

    @PostMapping("/logout")
    public  ResponseEntity<Map<String,Object>> logout(HttpSession session) {
        Map<String, Object> responseMap = new HashMap<>();
        String email = (String) session.getAttribute("email");
        if (email== null) {
            email = (String) session.getAttribute("sqlId");
        }
        memberService.multisub(email);
        session.invalidate();
        responseMap.put("status", 1);
        return  ResponseEntity.ok(responseMap);
    }

    @PostMapping("/intro")
    public ResponseEntity<Map<String,Object>> session(HttpSession session){
        String id = (String) session.getAttribute("email");
        String id2 = (String) session.getAttribute("sqlId");
        Map<String, Object> responseMap = new HashMap<>();
        if (id == null || id2 == null || id.equals("null") || id2.equals("null")) {
            responseMap.put("status", 0);
            return ResponseEntity.ok(responseMap);
        }else{
            responseMap.put("status", 1);
            return  ResponseEntity.ok(responseMap);
        }
    }

    @GetMapping(value = {"", "/main", "/login/{loginStep}", "/login/{userId}/{loginStep}", "/profile/{userId}/{nowProfileCode}/{profileMenu}", "/profile/{profileMenu}", "/profile/{profileMenu}", "/content/{contentType}/{contentGenre}/{contentId}", "/brand/{brandName}", "/search"
                , "/category/{mediaType}/{categoryType}", "/interest","/board","/board/{content}" ,"/board/write"})
    public String forward() {
        return "forward:/index.html";
    }

    @GetMapping("/profile/{profileMenu}/{profileSubMenu}")
    public String forwardProfileSubMenu() {
        return "forward:/index.html";
    }

    @GetMapping("/profile/{userId}/{nowProfileCode}/{profileMenu}/{profileSubMenu}")
    public String forwardProfileSubMenu2() {
        return "forward:/index.html";
    }

    @PostMapping("/interest")
    public ResponseEntity<Map<String,Object>> SelectInterest(@RequestBody Interest interest) {
        Map<String, Object> responseMap = new HashMap<>();

            Long profileId = interest.getProfileId();

            List<Interest> interests = interestService.SelectInterest(profileId);
            responseMap.put("status", 1);
            responseMap.put("interests", interests);

            return ResponseEntity.ok(responseMap);
    }
}
