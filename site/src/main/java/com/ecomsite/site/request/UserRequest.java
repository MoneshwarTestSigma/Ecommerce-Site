package com.ecomsite.site.request;

import com.ecomsite.site.enums.UserRole;
import lombok.Data;

@Data
public class UserRequest {
   private String name;
   private   String email;
   private UserRole type;
   private String password;
}
