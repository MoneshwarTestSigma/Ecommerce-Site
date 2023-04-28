package com.ecomsite.site.service;

import com.ecomsite.site.dto.LoggedInUserDto;
import com.ecomsite.site.model.User;
import com.ecomsite.site.enums.ERole;
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
        public List<User> roleUser(ERole type) {
            return this.userRepository.findAllByType(type);
        }


        public LoggedInUserDto idReturn(String email) {
            User user= this.userRepository.findByEmail(email);
            if(user!=null)
            {
                LoggedInUserDto loggedInUserDto=new LoggedInUserDto();
                loggedInUserDto.setUserId(user.getId());
                loggedInUserDto.setType(user.getType());
                loggedInUserDto.setName(user.getName());
                return loggedInUserDto;
            }
            return null;

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

