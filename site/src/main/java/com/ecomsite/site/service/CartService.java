package com.ecomsite.site.service;

import com.ecomsite.site.model.Cart;
import com.ecomsite.site.repository.CartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.expression.spel.ast.NullLiteral;
import org.springframework.stereotype.Service;

import javax.validation.constraints.Null;
import java.util.List;

@Service
public class CartService {
    @Autowired
    private CartRepository cartRepository;
    public  List<Cart> cartFind(Long id){
            return this.cartRepository.findAllByUserid(id);
    }
    public Cart cartAdd(Cart cart) {
           if(this.cartRepository.findByUseridAndProductid(cart.getUserid(),cart.getProductid())== null) {
           }
           else{
               cart.setId(this.cartRepository.findByUseridAndProductid(cart.getUserid(),cart.getProductid()).getId());
               Long quantity = this.cartRepository.findByUseridAndProductid(cart.getUserid(),cart.getProductid()).getQuantity();
               cart.setQuantity(cart.getQuantity()+quantity);
           }
        return this.cartRepository.save(cart);

    }


        public void cartDelete(Long id) {
             this.cartRepository.deleteAllByUserid(id);
        }

}
