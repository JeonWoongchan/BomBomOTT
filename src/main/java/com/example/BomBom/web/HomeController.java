package com.example.BomBom.web;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {

    @GetMapping(value =  {"", "/main", "/profile/{userId}/{profileMenu}", "/content/{contentType}/{contentGenre}/{contentId}", "/brand/{brandName}", "/search", "/category/{mediaType}/{categoryType}"})
    public String forward() {
        return "forward:/index.html";
    }

    @GetMapping("/profile/{userId}/{profileMenu}/{profileSubMenu}")
    public String forwardProfileSubMenu() {
        return "forward:/index.html";
    }
}
