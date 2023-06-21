package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.UserDTO;
import com.ecomsite.site.model.User;
import com.ecomsite.site.request.UserRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDTO map(User user);

    User map(UserRequest userRequest);

}