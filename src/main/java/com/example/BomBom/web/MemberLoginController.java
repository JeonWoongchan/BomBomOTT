package com.example.BomBom.web;

import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.domain.member.Member;
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
import javax.servlet.http.HttpSession;
import java.util.*;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/login")
@RequiredArgsConstructor
public class MemberLoginController {

    private final MemberService memberService;

    @GetMapping()
    public String loginForm(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model) {

        return "forward:/index.html";
    }

    @PostMapping()
    public ResponseEntity<Map<String, Object>> login(@RequestBody MemberLoginDto dto, HttpSession session) {
        Optional<Boolean> loggedIn = memberService.login(dto);


        if (loggedIn.isPresent()) {
            int multicheck = memberService.multiCheck(dto.getUserid());
            // 로그인 성공 시 처리
            if (multicheck == 0) {
                String userid = "";
                session.setAttribute("userid", dto.getUserid()); // 세션에 userid 저장

                Timer timer = new Timer();
                timer.schedule(new TimerTask() {
                    @Override
                    public void run() {
                        memberService.multisub(userid);
                    }
                }, 599999); // 9분 59초 후에 실행

                session.setMaxInactiveInterval(10 * 60);

                String sessionuserid = (String) session.getAttribute("userid");

                String name = memberService.MemberName(sessionuserid);

                memberService.multiAdd(sessionuserid);

                Map<String, Object> response = new HashMap<>();
                response.put("status", 1); //성공
                response.put("name", name);

                return ResponseEntity.ok(response);
            } else {
                Map<String, Object> response = new HashMap<>();
                response.put("status", -1); // 차단
                session.invalidate(); // 세션 무효화
                return ResponseEntity.ok(response);
            }
        } else {
            // 로그인 실패 시 처리
            Map<String, Object> response = new HashMap<>();
            response.put("status", 0);  //아이디 비번 없음

            return ResponseEntity.ok(response);
        }
    }

    @GetMapping("/logout")
    public String logout(HttpSession session,MemberLoginDto dto) {
        memberService.multisub(dto.getUserid());
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
