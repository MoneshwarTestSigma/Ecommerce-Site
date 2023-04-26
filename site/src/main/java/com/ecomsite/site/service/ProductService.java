package com.ecomsite.site.service;

import com.ecomsite.site.modal.Product;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ProductService {
    List<Product> productFind(String name);
    List<Product> productBelow(Long price);
    List<Product> productAbove(Long price);
    Optional<Product> productByid(Long productid);
    Product productAdd(Product product);

    List<Product> findAll();
}
