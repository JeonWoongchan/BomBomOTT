package com.example.BomBom.web;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/")
public class HomeController {

    @GetMapping(value = {"/", "/profile/{userId}/{profileMenu}", "/content/{contentType}/{contentGenre}/{contentId}", "/brand/{brandName}", "/search", "/category/{mediaType}/{categoryType}"})
    public String forward() {
        return "forward:/index.html";
    }


    @GetMapping("/main")
    public String forwardMain() {
        return "forward:/index.html";
    }

}
