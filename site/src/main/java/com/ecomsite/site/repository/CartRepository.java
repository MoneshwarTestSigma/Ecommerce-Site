package com.ecomsite.site.repository;

import com.ecomsite.site.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
@Transactional
public interface CartRepository extends JpaRepository<Cart,Long> {
    Cart findByUseridAndProductid(Long userid,Long productid);
    List<Cart> findAllByUserid(Long userid);

    void deleteById(Long id);
}
