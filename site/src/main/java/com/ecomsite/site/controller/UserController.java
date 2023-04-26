package com.ecomsite.site.controller;


import com.ecomsite.site.dto.UserDTO;
import com.ecomsite.site.modal.User;
import com.ecomsite.site.enums.Role;
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
//    @Autowired
//    List<UserRoleDtoSend>  userRoleDtoSends= new ArrayList<>();
//    @Autowired
//    UserMapper userMapper;

    @GetMapping("/email/{email}")
    public Long userReturn(@PathVariable("email") String email){
        return this.userService.idReturn(email);
    }
    @GetMapping("/{type}")
    List<UserDTO> roleUsers(@PathVariable("type") Role type){
        List<UserDTO> userDTOS = new ArrayList<>();
        for(User user : this.userService.roleUser(type)){
            userDTOS.add(this.userMapper.userToUserDTO(user));
        }
        return userDTOS;
    }
    @PostMapping()
    User postUser(@RequestBody UserRequest userRequest){
      return  this.userService.addUser(this.userMapper.userRequestToUser(userRequest));
    }

}
