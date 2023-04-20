package service;

import entity.Cart;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import repository.CartRepository;

import java.util.List;
@Service
public class CartServiceImplementation implements CartService{
    @Autowired
    CartRepository cartRepository;
    @Override
    public List<Cart> cartFind(Long userid) {
        return this.cartRepository.findAllByUserid(userid);
    }
}
