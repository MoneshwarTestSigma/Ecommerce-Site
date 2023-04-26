package com.ecomsite.site.service;

import com.ecomsite.site.modal.Cart;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {
    List<Cart> cartFind (Long id);

    Cart cartAdd (Cart cart);
    void cartDelete(Long id);

}
