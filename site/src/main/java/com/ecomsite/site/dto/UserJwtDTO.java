package com.ecomsite.site.dto;

import lombok.Data;
import org.springframework.stereotype.Component;
@Data
@Component
public class UserJwtDTO {
    private String username;
    private String password;

}
