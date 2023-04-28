package com.ecomsite.site.request;

import com.ecomsite.site.enums.ERole;
import lombok.Data;

@Data
public class UserRequest {
   private String name;
   private   String email;
   private ERole type;
   private String password;
}
