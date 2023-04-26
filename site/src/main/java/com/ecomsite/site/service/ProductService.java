package com.ecomsite.site.service;

import com.ecomsite.site.builder.ProductSpecificationBuilder;
import com.ecomsite.site.criteria.Criteria;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
        @Autowired
        private ProductRepository productRepository;
        @Autowired
        private ProductSpecificationBuilder productSpecificationBuilder;

        public List<Product> productFind(String name) {
            return this.productRepository.findAllByNameLike("%"+name+"%");
        }



        public List<Product> productBelow(Long price) {
            return this.productRepository.findAllByPriceBefore(price);
        }

        public List<Product> productAbove(Long price) {
            return this.productRepository.findAllByPriceAfter(price);
        }


        public Optional<Product> productByid(Long productid) {
            return this.productRepository.findById(productid);
        }


        public Product productAdd(Product product) {
            return this.productRepository.save(product);
        }


        public List<Product> findAll() {
            return this.productRepository.findAll();
        }

    public List<Product> searchProducts(List<Criteria> criteriaList) {
        Specification spec= productSpecificationBuilder.builder(criteriaList);
        return this.productRepository.findAll(spec);
    }
}

