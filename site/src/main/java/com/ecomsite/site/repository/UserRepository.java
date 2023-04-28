package com.ecomsite.site.repository;

import com.ecomsite.site.model.User;
import com.ecomsite.site.enums.ERole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    User findByEmail(String email);
    List<User> findAllByType(ERole type);
    void deleteByEmail(String email);
}
