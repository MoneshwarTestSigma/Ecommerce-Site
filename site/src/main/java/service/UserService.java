package service;

import entity.User;
import enums.Role;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User addUser(User user);
    List<User> roleUser(Role type);
    Long idReturn(String email);
}
