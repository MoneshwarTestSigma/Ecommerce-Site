package com.ecomsite.site.repository;


import com.ecomsite.site.model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserDaoRepository extends CrudRepository<User, Integer> {

    User findByEmail(String username);
}
