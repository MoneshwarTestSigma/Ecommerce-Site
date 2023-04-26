package com.ecomsite.site.service;

import com.ecomsite.site.modal.User;
import com.ecomsite.site.enums.Role;
import com.ecomsite.site.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
        @Autowired
        private UserRepository userRepository;

        public User addUser(User user) {
            return this.userRepository.save(user);
        }
        public List<User> roleUser(Role type) {
            return this.userRepository.findAllByType(type);
        }


        public Long idReturn(String email) {
            return this.userRepository.findByEmail(email).getId();
        }

        public void deleteUser(String email) {
             this.userRepository.deleteByEmail(email);
        }

        public String findPassword(String email) {
            User user= this.userRepository.findByEmail(email);
            if(user!=null)
            {
                return user.getPassword();
            }
            return "";
        }
}

