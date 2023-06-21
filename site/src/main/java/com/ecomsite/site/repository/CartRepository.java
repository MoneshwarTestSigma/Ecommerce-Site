package com.ecomsite.site.repository;

import com.ecomsite.site.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;


@Repository
public interface CartRepository extends JpaRepository<Cart,Long> {
    Cart findByUserIdAndProductId(Long userId,Long productId);
    List<Cart> findByUserId(Long userId);

    void deleteById(Long id);
}
