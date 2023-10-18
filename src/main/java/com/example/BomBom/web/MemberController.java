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

import java.util.List;

@Controller
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    @GetMapping()
    public String members(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model) {
        List<Member> members = memberService.findItems(memberSearch);
        model.addAttribute("members", members);




        int count = memberService.MemberCount();
        model.addAttribute("count",count);



        return "members";
    }

    @GetMapping("/{memberId}")

    public String member(@PathVariable long memberId, Model model) {



        Member member = memberService.findById(memberId).get();
        model.addAttribute("member", member);
        return "member";
    }

    @GetMapping("/add")
    public String addForm() {
        return "addForm";
    }

    @PostMapping("/add")
    public String addItem(@ModelAttribute Member member, RedirectAttributes redirectAttributes) {
        Member savedMember = memberService.save(member);
        redirectAttributes.addAttribute("memberId", savedMember.getId());
        redirectAttributes.addAttribute("status", true);
        return "redirect:/members/{memberId}";
    }

    @GetMapping("/{memberId}/edit")
    public String editForm(@PathVariable Long memberId, Model model) {
        Member member = memberService.findById(memberId).get();
        model.addAttribute("member", member);
        return "editForm";
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
