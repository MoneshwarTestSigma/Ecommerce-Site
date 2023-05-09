package com.ecomsite.site.dto;

import com.ecomsite.site.enums.UserRole;
import lombok.Data;

@Data
public class LoggedInUserDto {
    private String name;
    private UserRole type;
    private Long userId;
}
