package com.ecomsite.site.controller;


import com.ecomsite.site.dto.LoggedInUserDto;
import com.ecomsite.site.dto.UserDTO;
import com.ecomsite.site.enums.ERole;
import com.ecomsite.site.model.User;
import com.ecomsite.site.mapper.UserMapper;
import com.ecomsite.site.request.LoginRequest;
import com.ecomsite.site.request.UserRequest;
import com.ecomsite.site.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService userService;
    @Autowired
    UserMapper userMapper;
//    @Autowired
//    List<UserRoleDtoSend>  userRoleDtoSends= new ArrayList<>();
//    @Autowired
//    UserMapper userMapper;

    @GetMapping("/email/{email}")
    public LoggedInUserDto userReturn(@PathVariable("email") String email){
        return this.userService.idReturn(email);
    }

    @GetMapping("/{type}")
    List<UserDTO> roleUsers(@PathVariable("type") ERole type){
        List<UserDTO> userDTOS = new ArrayList<>();
        for(User user : this.userService.roleUser(type)){
            userDTOS.add(this.userMapper.userToUserDTO(user));
        }
        return userDTOS;
    }
    @PostMapping("/login")
    int checkUser(@RequestBody LoginRequest loginRequest)
    {
        String password=this.userService.findPassword(loginRequest.getEmail());
        System.out.println(password);
            if(loginRequest.getPassword().equals(password))
            {
                return 1;
            }
            return 0;

    }
    @PostMapping()
    String postUser(@RequestBody UserRequest userRequest){
        this.userService.addUser(this.userMapper.userRequestToUser(userRequest));
        return "Added Successfully";
    }


}
