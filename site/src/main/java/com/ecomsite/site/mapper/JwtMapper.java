package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.UserJwtDTO;
import com.ecomsite.site.request.JwtRequest;
import com.ecomsite.site.request.LoginRequest;
import com.ecomsite.site.model.User;
public class JwtMapper {
    public UserJwtDTO userToUserJwtDTO(User user)
    {
        UserJwtDTO userDTO=new UserJwtDTO();
        userDTO.setPassword(user.getPassword());
        userDTO.setUsername(user.getEmail());
        return userDTO;
    }
    public JwtRequest loginRequestToJwtRequest(LoginRequest loginRequest)
    {
       return new JwtRequest(loginRequest.getEmail(),loginRequest.getPassword());
    }


}
