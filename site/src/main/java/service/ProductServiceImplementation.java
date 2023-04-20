package service;

import entity.Product;
import org.springframework.beans.factory.annotation.Autowired;
import repository.ProductRepository;

import java.util.List;

public class ProductServiceImplementation implements ProductService{
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
}
