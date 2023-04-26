package com.ecomsite.site.service;

import com.ecomsite.site.modal.Cart;
import com.ecomsite.site.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {
    List<Cart> cartFind (Long id);

    Cart cartAdd (Cart cart);
    void cartDelete(Long id);

    @Service
    class CartServiceImplementation implements CartService{
        @Autowired
        CartRepository cartRepository;
        @Override
        public List<Cart> cartFind(Long userid) {
            return this.cartRepository.findAllByUserid(userid);
        }

        @Override
        public Cart cartAdd(Cart cart) {
            return this.cartRepository.save(cart);
        }

        @Override
        public void cartDelete(Long id) {
             this.cartRepository.deleteAllByUserid(id);
        }
    }
}
