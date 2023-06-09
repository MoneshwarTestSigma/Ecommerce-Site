package com.ecomsite.site.service;

import com.ecomsite.site.model.Cart;
import com.ecomsite.site.repository.CartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.util.List;

@Service
public class CartService {
    @Autowired
    CartRepository cartRepository;
    public  List<Cart> cartFind(Long id){
            return this.cartRepository.findAllByUserid(id);

    }
    public void deleteCart(Long cartid){
        this.cartRepository.deleteById(cartid);

    }
    public Cart cartAdd(Cart cart) {
           if(this.cartRepository.findByUseridAndProductid(cart.getUserid(),cart.getProductid())== null) {
           }
           else {
               cart.setId(this.cartRepository.findByUseridAndProductid(cart.getUserid(), cart.getProductid()).getId());
               Long quantity = this.cartRepository.findByUseridAndProductid(cart.getUserid(), cart.getProductid()).getQuantity();
               cart.setQuantity(cart.getQuantity());
           }
        return this.cartRepository.save(cart);

    }


}
