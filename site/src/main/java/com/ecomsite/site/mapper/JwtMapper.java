package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.UserJwtDTO;
import com.ecomsite.site.request.JwtRequest;
import com.ecomsite.site.request.LoginRequest;
import com.ecomsite.site.model.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface JwtMapper {
   @Mapping(source = "user.email",target = "username")
   UserJwtDTO map(User user);
   @Mapping(source = "loginRequest.email",target = "username")
   JwtRequest map(LoginRequest loginRequest);

}
