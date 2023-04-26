package com.ecomsite.site.service;

import com.ecomsite.site.modal.Cart;
import com.ecomsite.site.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;
    public  List<Cart> cartFind(Long id){
            return this.cartRepository.findAllByUserid(id);
    }
    public Cart cartAdd(Cart cart) {
            return this.cartRepository.save(cart);
        }


        public void cartDelete(Long id) {
             this.cartRepository.deleteAllByUserid(id);
        }

}
