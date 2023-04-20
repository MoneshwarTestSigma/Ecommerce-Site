package service;

import entity.Cart;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CartService {
    List<Cart> cartFind (Long userid);
}
