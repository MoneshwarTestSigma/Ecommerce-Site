package com.ecomsite.site.service;

import com.ecomsite.site.modal.User;
import com.ecomsite.site.enums.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User addUser(User user);
    List<User> roleUser(Role type);
    Long idReturn(String email);

    void deleteUser(String email);
}
