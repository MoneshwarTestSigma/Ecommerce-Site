package service;

import entity.Product;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ProductService {
    List<Product> productFind(String name);
    List<Product> productBelow(Long price);
    List<Product> productAbove(Long price);
}
