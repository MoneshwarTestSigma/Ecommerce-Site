package com.ecomsite.site.service;

import com.ecomsite.site.modal.Product;
import com.ecomsite.site.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
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

    @Service
    class ProductServiceImplementation implements ProductService{
        @Autowired
        ProductRepository productRepository;
        @Override
        public List<Product> productFind(String name) {
            return this.productRepository.findAllByNameLike("%"+name+"%");
        }

        @Override
        public List<Product> productBelow(Long price) {
            return this.productRepository.findAllByPriceBefore(price);
        }

        @Override
        public List<Product> productAbove(Long price) {
            return this.productRepository.findAllByPriceAfter(price);
        }

        @Override
        public Optional<Product> productByid(Long productid) {
            return this.productRepository.findById(productid);
        }

        @Override
        public Product productAdd(Product product) {
            return this.productRepository.save(product);
        }

        @Override
        public List<Product> findAll() {
            return this.productRepository.findAll();
        }

    }
}
