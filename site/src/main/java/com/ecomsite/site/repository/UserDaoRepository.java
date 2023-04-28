package com.ecomsite.site.repository;


import com.ecomsite.site.model.UserAuth;
import org.springframework.data.repository.CrudRepository;

public interface UserDaoRepository extends CrudRepository<UserAuth, Integer> {

    UserAuth findByUsername(String username);
}
