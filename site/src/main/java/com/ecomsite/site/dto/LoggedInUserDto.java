package com.ecomsite.site.dto;

import com.ecomsite.site.enums.ERole;
import lombok.Data;

@Data
public class LoggedInUserDto {
    private String name;
    private ERole type;
    private Long userId;
}
