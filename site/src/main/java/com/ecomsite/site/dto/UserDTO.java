package com.ecomsite.site.dto;

import com.ecomsite.site.enums.Role;
import lombok.Data;

@Data
public class UserDTO {
    private String name;
    private Role type;
}