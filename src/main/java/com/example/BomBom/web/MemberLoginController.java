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

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/login")
@RequiredArgsConstructor
public class MemberLoginController {

    private final MemberService memberService;

    @GetMapping()
    public String loginForm(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model) {

        return "login/login";
    }



    @PostMapping()
    public String login(MemberLoginDto dto, Model model, RedirectAttributes redirectAttributes) {
        Optional<Boolean> loggedIn = memberService.login(dto);

        if (loggedIn.isPresent()) {
            // 로그인 성공 시 처리
            redirectAttributes.addFlashAttribute("LoginMessage", "로그인 완료");
            return "redirect:login";
        } else {
            // 로그인 실패 시 처리
            redirectAttributes.addFlashAttribute("LoginMessage", "아이디 또는 비밀번호가 일치하지가 않습니다");
            return "redirect:login";
        }
    }


}
