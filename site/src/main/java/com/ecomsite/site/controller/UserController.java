package com.ecomsite.site.controller;


import com.ecomsite.site.dto.LoggedInUserDto;
import com.ecomsite.site.dto.UserDTO;
import com.ecomsite.site.enums.UserRole;
import com.ecomsite.site.model.User;
import com.ecomsite.site.mapper.UserMapper;
import com.ecomsite.site.request.UserRequest;
import com.ecomsite.site.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;





    @GetMapping("/email/{email}")
    public LoggedInUserDto userReturn(@PathVariable("email") String email){
        return userService.idReturn(email);
    }

    @GetMapping("/{type}")
    List<UserDTO> roleUsers(@PathVariable("type") UserRole type){
        List<UserDTO> userDTOS = new ArrayList<>();
        for(User user : userService.roleUser(type)){
            userDTOS.add(userMapper.map(user));
        }
        return userDTOS;
    }

    @PostMapping()
    String postUser(@RequestBody UserRequest userRequest){
        userService.addUser(userMapper.map(userRequest));
        return "Added Successfully";
    }


}
