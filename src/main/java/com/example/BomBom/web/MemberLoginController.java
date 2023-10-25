package com.example.BomBom.web;

import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.domain.member.Member;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/login")
@RequiredArgsConstructor
@RestController
public class MemberLoginController {

    private final MemberService memberService;

    @GetMapping()
    public String loginForm(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model) {

        return "forward:/index.html";
    }

    @PostMapping("/enter-email")
    public ResponseEntity<Map<String,Object>> EmailCheck(@RequestBody MemberLoginDto dto,
                                                         @ModelAttribute Member member,
                                                         RedirectAttributes redirectAttributes,
                                                         HttpServletRequest request,
                                                         HttpSession session,
                                                         HttpServletResponse response) {
        String email = dto.getEmail();
        Map<String, Object> responseMap = new HashMap<>();
        // 중복 공백 제거 로직은 생략

        Optional<String> sqlId = memberService.DupCheck(email);

        if (sqlId.isPresent()) {
            // 이미 아이디가 존재하는 경우

            responseMap.put("status", 1); //  아이디가 이미 존재함을 나타내는 값
            responseMap.put("sqld", sqlId.get());
            session.setAttribute("sqlId", sqlId.get());
            return ResponseEntity.ok(responseMap);
        } else {
            responseMap.put("status", 0); //  아이디가 없는경우
            responseMap.put("email", email);
            session.setAttribute("email", email);
            return ResponseEntity.ok(responseMap);
            //회원가입

        }
    }
    @PostMapping("/enter-password")
    public ResponseEntity<Map<String,Object>> PasswordCheck(@RequestBody MemberLoginDto dto,
                                                            @ModelAttribute Member member,
                                                            HttpSession session
                                                           ) {

        Map<String, Object> responseMap = new HashMap<>();
        String sql = (String) session.getAttribute("sqlId");
        if (sql == null) {
            responseMap.put("status", 1); // 다시돌아가
            return ResponseEntity.ok(responseMap);
        } else {
            dto.setEmail(sql);
            Optional<Boolean> success = memberService.login(dto);
            if (success.isPresent()) {
                int multicheck = memberService.multiCheck(dto.getEmail());
                if (multicheck == 0) {
                    session.setAttribute("email", dto.getEmail()); // 세션에 userid 저장

                    Timer timer = new Timer();
                    timer.schedule(new TimerTask() {
                        @Override
                        public void run() {
                            memberService.multisub(sql);
                        }
                    }, 599999); // 9분 59초 후에 실행

                    session.setMaxInactiveInterval(10 * 60);

                    String sessionuserid = (String) session.getAttribute("email");



                    memberService.multiAdd(sessionuserid);
                    int id = memberService.FindId(sessionuserid);

                    responseMap.put("status", 1); // 아이디 비밀번호 맞음
                    responseMap.put("id", id);

                    return ResponseEntity.ok(responseMap);
                } else {
                    responseMap.put("status", -1);
                    return ResponseEntity.ok(responseMap);  // 다중 접속 실패
                }

            } else {
                responseMap.put("status", 0); // 아이디 비밀번호 틀림

                return ResponseEntity.ok(responseMap);


            }


        }

        // 중복 공백 제거 로직은 생략


    }

    @PostMapping("/create-password")
    public ResponseEntity<Map<String,Object>> addMember(@RequestBody Member member, MemberLoginDto dto,HttpSession session) {

        String email = (String) session.getAttribute("email");
        Random random = new Random();

        // 1부터 8자리 숫자를 생성

        long min = 10000000L;  // 1,000,000부터 시작 (7자리)
        long max = 99999999L;   // 99,999,999까지 (8자리)
        long randomValue = min + Math.abs(random.nextLong()) % (max - min + 1);

        member.setPassword(member.getPassword());
        member.setId(randomValue);
        member.setEmail(email);


        Member savedMember = memberService.save(member);



        dto.setEmail(email);
        dto.setPassword(member.getPassword());
        Optional<Boolean> success = memberService.login(dto);


        Timer timer = new Timer();
        timer.schedule(new TimerTask() {
            @Override
            public void run() {
                memberService.multisub(email);
            }
        }, 599999); // 9분 59초 후에 실행

        memberService.multiAdd(email);

        session.setMaxInactiveInterval(10 * 60);

        Map<String, Object> responseMap = new HashMap<>();
        responseMap.put("status", 1);
        responseMap.put("id", randomValue);
        session.setAttribute("randomValue", randomValue);

        return  ResponseEntity.ok(responseMap);

    }

    @PostMapping("/enter-payment")
    public ResponseEntity<Map<String,Object>> payment(@RequestBody MemberUpdateDto updateParam,
                                                            @ModelAttribute Member member,
                                                            HttpSession session) {
        Map<String, Object> responseMap = new HashMap<>();
        String email = (String) session.getAttribute("email");


        if (email==null) {
            responseMap.put("status",0);
            return ResponseEntity.ok(responseMap);
        } else{
            memberService.payment(email,updateParam);
            responseMap.put("status",1);

            return ResponseEntity.ok(responseMap);
        }



    }

        // 중복 공백 제거 로직은 생략


    @GetMapping("/logout")
    public String logout(HttpSession session,MemberLoginDto dto) {
        memberService.multisub(dto.getEmail());
        session.invalidate(); // 세션 무효화

        return "forward:/index.html"; // 로그인 페이지로 리다이렉트
    }

    @GetMapping("/block")
    public String block(HttpSession session,RedirectAttributes redirectAttributes) {
        session.invalidate(); // 세션 무효화
        redirectAttributes.addFlashAttribute("block","최대 1개 기기만 접속 하실 수 있습니다.");
        return "forward:/index.html"; // 로그인 페이지로 리다이렉트
    }


}
