package com.example.BomBom.web;

import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberSearchC;
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

    @PostMapping("/")
    public void addMember(@RequestBody MemberLoginDto dto,
                          @ModelAttribute Member member,
                          RedirectAttributes redirectAttributes,
                          HttpServletRequest request,
                          HttpSession session,
                          HttpServletResponse response) {
        String email = request.getParameter("email");

        // 중복 공백 제거 로직은 생략

        Optional<String> sqlId = memberService.DupCheck(email);

        if (sqlId.isPresent()) {
            // 이미 아이디가 존재하는 경우
            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("status", 1); // 변경: 아이디가 이미 존재함을 나타내는 값
            responseMap.put("sqld", sqlId.get());

            response.setContentType("application/json");
            try {
                response.getWriter().write(new ObjectMapper().writeValueAsString(responseMap));
            } catch (IOException e) {
                e.printStackTrace();
            }

            dto.setEmail(sqlId.get());
            Optional<Boolean> loggedIn = memberService.login(dto);

            if (loggedIn.isPresent()) {
                int multicheck = memberService.multiCheck(dto.getEmail());
                if (multicheck == 0) {
                    session.setAttribute("email", dto.getEmail()); // 세션에 userid 저장

                    Timer timer = new Timer();
                    timer.schedule(new TimerTask() {
                        @Override
                        public void run() {
                            memberService.multisub(email);
                        }
                    }, 599999); // 9분 59초 후에 실행

                    session.setMaxInactiveInterval(10 * 60);

                    String sessionuserid = (String) session.getAttribute("email");

                    String name = memberService.MemberName(sessionuserid);

                    memberService.multiAdd(sessionuserid);


                    responseMap.put("status", 10); // 변경: 로그인 성공을 나타내는 값
                    responseMap.put("name", name);

                    response.setContentType("application/json");
                    try {
                        response.getWriter().write(new ObjectMapper().writeValueAsString(responseMap));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                } else {
                    responseMap.put("status", -1);
                    response.setContentType("application/json");
                    try {
                        response.getWriter().write(new ObjectMapper().writeValueAsString(responseMap));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                    // 다중 로그인 실패
                }
            } else {
                responseMap.put("status", -10);
                response.setContentType("application/json");
                try {
                    response.getWriter().write(new ObjectMapper().writeValueAsString(responseMap));
                } catch (IOException e) {
                    e.printStackTrace();
                }
                // 비밀번호 틀렸어..

            }




        } else {

            Map<String, Object> responseMap = new HashMap<>();
            responseMap.put("status", -100);
            responseMap.put("sqlId",sqlId.get());
            // 아이디 없으니 회원가입 ㄱㄱ
        }

    }

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
