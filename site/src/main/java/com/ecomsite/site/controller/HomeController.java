package com.ecomsite.site.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/")
public class HomeController {

    @GetMapping()
    public String homeReturn (){
        return "<h1>Home Page</h1>";
    }

}
