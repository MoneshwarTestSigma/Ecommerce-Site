package com.ecomsite.site.controller;


import com.ecomsite.site.dto.LoggedInUserDto;
import com.ecomsite.site.model.User;
import com.ecomsite.site.service.JwtUserDetailsService;
import com.ecomsite.site.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController

public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    private JwtUserDetailsService userDetailsService;



@ResponseStatus(HttpStatus.OK)
    @GetMapping("/user/email/{email}")
    public LoggedInUserDto userReturn(@PathVariable("email") String email){
        return userService.idReturn(email);
    }

    @ResponseStatus(HttpStatus.CREATED)
    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
        return ResponseEntity.ok(userDetailsService.save(user));
    }


}
