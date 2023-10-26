package com.example.BomBom.web;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
public class HomeController {

    @GetMapping(value = {"", "/main/{nowProfileCode}", "/login/{loginStep}", "/login/{userId}/{loginStep}", "/profile/{userId}/{nowProfileCode}/{profileMenu}", "/content/{nowProfileCode}/{contentType}/{contentGenre}/{contentId}", "/brand/{brandName}", "/search/{nowProfileCode}", "/category/{nowProfileCode}/{mediaType}/{categoryType}","/board/{nowProfileCode}","/board/{nowProfileCode}/{content}"})
    public String forward() {
        return "forward:/index.html";
    }

    @GetMapping("/profile/{userId}/{nowProfileCode}/{profileMenu}/{profileSubMenu}")
    public String forwardProfileSubMenu() {
        return "forward:/index.html";
    }


}
