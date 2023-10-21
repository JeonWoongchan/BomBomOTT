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
import java.util.List;
import java.util.Optional;
import java.util.Timer;
import java.util.TimerTask;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/login")
@RequiredArgsConstructor

public class MemberLoginController {

    private final MemberService memberService;

 @GetMapping()
 public String loginForm() {

     return "forward:index.html";
 }


    @PostMapping()
    public String login(@RequestBody MemberLoginDto dto, Model model, RedirectAttributes redirectAttributes,
                        HttpSession session) {

        Optional<Boolean> loggedIn = memberService.login(dto);
        int multicheck = memberService.multiCheck(dto.getUserid());
        if (loggedIn.isPresent()) {
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
                model.addAttribute("userid", userid);

                String name = memberService.MemberName(sessionuserid);

                redirectAttributes.addFlashAttribute("LoginMessage", name + "님 안녕하세요 ");
                memberService.multiAdd(sessionuserid);
                return "redirect:/main"; // 로그인 성공 시 "/main"으로 리디렉션
            } else {
                return "redirect:/login/block";
            }

        } else {
            // 로그인 실패 시 처리
            redirectAttributes.addFlashAttribute("LoginMessage", "아이디 또는 비밀번호가 일치하지가 않습니다");
            return "redirect:/login";
        }
    }


    @GetMapping("/logout")
    public String logout(HttpSession session) {


        String sessionuserid = (String) session.getAttribute("userid");
        memberService.multisub(sessionuserid);
        session.invalidate(); // 세션 무효화

        return "redirect:/login"; // 로그인 페이지로 리다이렉트
    }


    @GetMapping("/block")
    public String block(HttpSession session,RedirectAttributes redirectAttributes) {
        session.invalidate(); // 세션 무효화
        redirectAttributes.addFlashAttribute("block","최대 1개 기기만 접속 하실 수 있습니다.");
        return "redirect:/login"; // 로그인 페이지로 리다이렉트
    }


}
