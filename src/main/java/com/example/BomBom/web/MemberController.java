package com.example.BomBom.web;

import com.example.BomBom.Repository.MemberLoginDto;
import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.domain.member.Member;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.*;
import java.util.regex.Pattern;
import java.util.regex.Matcher;

@CrossOrigin(origins = "*")
@Controller
@RequestMapping("/member")
@RequiredArgsConstructor
@RestController
public class MemberController {

    private final MemberService memberService;

    @GetMapping()
    public String members(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model,
                          HttpSession session) {
        // 세션 확인
        if (session.getAttribute("email") == null) {
            return "redirect:/login"; // 로그인 페이지로 리다이렉트
        } else {
            List<Member> members = memberService.findMemberName(memberSearch);
            model.addAttribute("members", members);

            int count = memberService.MemberCount();
            model.addAttribute("count", count);

            String sessionuserid = (String) session.getAttribute("email");
            String sessionuserid2 = (String) session.getAttribute("id");

            String name = memberService.MemberName(sessionuserid);

            model.addAttribute("name", name);
            model.addAttribute("sessionuserid", sessionuserid);
            model.addAttribute("sessionuserid2", sessionuserid2);
        }


        return "member/members";
    }






    @GetMapping("/mypage/{sessionuserid}")

    public String Mypage(@PathVariable String sessionuserid, Model model, HttpSession session) {
        sessionuserid = (String) session.getAttribute("email");

        Member member = memberService.Mypage(sessionuserid).get();
        model.addAttribute("member", member);
        return "member/mypage";
    }

    @PostMapping("/password/{email}")
    public ResponseEntity<Map<String,Object>> Password(@RequestBody @PathVariable String email,@ModelAttribute MemberUpdateDto
            updateParam, HttpSession session,HttpServletRequest request ) {
        email = (String) session.getAttribute("email");

        String pastPassword = memberService.SelectPassword(email);






        String CheckPassword = request.getParameter("password");
        Map<String,Object> response = new HashMap<>();
        if (pastPassword.equals(CheckPassword)) {

             session.setAttribute("pastPassword",pastPassword);

            response.put("status", 1);
            return ResponseEntity.ok(response);
        } else  {

            response.put("status", -1);
            return ResponseEntity.ok(response);

        }


    }


    @PostMapping("/Change/{email}")
    public ResponseEntity<Map<String,Object>> Change(@RequestBody @PathVariable String email,@ModelAttribute MemberUpdateDto
            updateParam, HttpSession session,HttpServletRequest request ) {

        String password = (String) session.getAttribute("pastPassword");
        Map<String,Object> response = new HashMap<>();
        if (password==null) {
            response.put("status", -1);
            return ResponseEntity.ok(response);
        } else {
            email = (String) session.getAttribute("email");


            memberService.UpdatePassword(email, updateParam);


            response.put("status", 1);
            return ResponseEntity.ok(response);
        }




    }









    @GetMapping("/{memberId}")

    public String member(@PathVariable long memberId, Model model) {


        Member member = memberService.findById(memberId).get();
        model.addAttribute("member", member);
        return "member/member";
    }

    @GetMapping("/add")
    public String addForm() {
        return "member/Form/addForm";
    }




//    @PostMapping("/dup")
//    public String dupCheck(@ModelAttribute Member member, RedirectAttributes redirectAttributes) {
//
//
//
//    }


                @GetMapping("/{memberId}/edit")
                public String editForm (@PathVariable Long memberId, Model model){
                    Member member = memberService.findById(memberId).get();
                    model.addAttribute("member", member);
                    return "member/Form/editForm";
                }

                @PostMapping("/{memberId}/edit")
                public String edit (@PathVariable Long memberId, @ModelAttribute MemberUpdateDto
                updateParam, RedirectAttributes redirectAttributes){
                    memberService.update(memberId, updateParam);
                    redirectAttributes.addAttribute("update", true);

                    return "redirect:/members/{memberId}";
                }


                @PostMapping("/{memberId}/delete")
                public String delete (@PathVariable Long memberId, RedirectAttributes redirectAttributes){
                    memberService.delete(memberId);
                    redirectAttributes.addAttribute("delete", true);

                    return "redirect:/members";
                }
            }
