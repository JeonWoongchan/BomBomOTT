package com.example.BomBom.web;


import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.Repository.MemberUpdateDto;
import com.example.BomBom.Service.MemberService;
import com.example.BomBom.domain.member.Member;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;
import java.util.regex.Pattern;
import java.util.regex.Matcher;
@Controller
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping()
    public String members(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model,
                          HttpSession session) {
        // 세션 확인
        if (session.getAttribute("userid") == null) {
            return "redirect:/login"; // 로그인 페이지로 리다이렉트
        } else {
            List<Member> members = memberService.findMemberName(memberSearch);
            model.addAttribute("members", members);

            int count = memberService.MemberCount();
            model.addAttribute("count", count);

            String sessionuserid = (String) session.getAttribute("userid");

            String name = memberService.MemberName(sessionuserid);

            model.addAttribute("name", name);
            model.addAttribute("sessionuserid", sessionuserid);
        }



        return "member/members";
    }


    @GetMapping("/mypage/{sessionuserid}")

    public String Mypage(@PathVariable  String  sessionuserid, Model model, HttpSession session) {
         sessionuserid = (String) session.getAttribute("userid");
        System.out.println(sessionuserid);
        Member member = memberService.Mypage(sessionuserid).get();
        model.addAttribute("member",member);
        return "member/mypage";
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

    @PostMapping("/add")
    public String addMember(@ModelAttribute Member member, RedirectAttributes redirectAttributes, HttpServletRequest request) {


      String  userid = request.getParameter("userid");


        Pattern pattern = Pattern.compile("\\s");
        Matcher matcher = pattern.matcher(userid);
        userid = matcher.replaceAll("");



        Optional<String> sqlId = memberService.DupCheck(userid);


        if (userid.equals(sqlId)) {

            redirectAttributes.addFlashAttribute("userid",sqlId+"이미 있는 아이디 입니다");
            return "redirect:/members/add";


        } else {
            Member savedMember = memberService.save(member);
            redirectAttributes.addAttribute("memberId", savedMember.getId());
            redirectAttributes.addAttribute("status", true);
            return "redirect:/members/{memberId}";
        }

    }

//    @PostMapping("/dup")
//    public String dupCheck(@ModelAttribute Member member, RedirectAttributes redirectAttributes) {
//
//
//
//    }





    @GetMapping("/{memberId}/edit")
    public String editForm(@PathVariable Long memberId, Model model) {
        Member member = memberService.findById(memberId).get();
        model.addAttribute("member", member);
        return "member/Form/editForm";
    }

    @PostMapping("/{memberId}/edit")
    public String edit(@PathVariable Long memberId, @ModelAttribute MemberUpdateDto updateParam ,RedirectAttributes redirectAttributes) {
        memberService.update(memberId, updateParam);
        redirectAttributes.addAttribute("update",true );

        return "redirect:/members/{memberId}";
    }


    @PostMapping("/{memberId}/delete")
    public String delete(@PathVariable Long memberId,RedirectAttributes redirectAttributes) {
        memberService.delete(memberId);
        redirectAttributes.addAttribute("delete",true );

        return "redirect:/members";
    }
}
