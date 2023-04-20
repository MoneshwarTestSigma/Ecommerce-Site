package service;

import entity.User;
import enums.Role;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.UserRepository;

import java.util.List;
@Service
public class UserSeriviceImplentation implements UserService{
    @Autowired
    UserRepository userRepository;
    @Override
    public User addUser(User user) {
        return this.userRepository.save(user);
    }

    @Override
    public List<User> roleUser(Role type) {
        return this.userRepository.findAllByType(type);
    }

    @Override
    public Long idReturn(String email) {
        return this.userRepository.findByEmail(email).getId();
    }
}
