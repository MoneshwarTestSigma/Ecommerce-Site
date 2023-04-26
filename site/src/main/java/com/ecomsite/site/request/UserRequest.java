package com.ecomsite.site.request;

import com.ecomsite.site.enums.Role;
import lombok.Data;

@Data
public class UserRequest {
   private String name;
   private   String email;
   private Role type;
   private String password;
}
