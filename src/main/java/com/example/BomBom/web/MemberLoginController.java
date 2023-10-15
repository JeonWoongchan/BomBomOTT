package com.example.BomBom.web;

import com.example.BomBom.Repository.MemberSearchC;
import com.example.BomBom.domain.member.Member;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/login")
public class MemberLoginController {



    @GetMapping()
    public String login(@ModelAttribute("memberSearch") MemberSearchC memberSearch, Model model) {

        return "login/login";
    }








}
