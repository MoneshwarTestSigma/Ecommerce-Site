package com.ecomsite.site.service;

import com.ecomsite.site.modal.User;
import com.ecomsite.site.enums.Role;
import com.ecomsite.site.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    User addUser(User user);
    List<User> roleUser(Role type);
    Long idReturn(String email);

    void deleteUser(String email);

    @Service
    class UserSeriviceImplentation implements UserService{
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

        @Override
        public void deleteUser(String email) {
             this.userRepository.deleteByEmail(email);
        }
    }
}
