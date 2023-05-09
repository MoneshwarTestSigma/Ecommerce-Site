package com.ecomsite.site.repository;

import com.ecomsite.site.model.User;
import com.ecomsite.site.enums.UserRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
    List<User> findAllByType(UserRole type);
    void deleteByEmail(String email);
}
