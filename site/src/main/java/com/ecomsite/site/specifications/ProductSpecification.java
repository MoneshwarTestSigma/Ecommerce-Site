package com.ecomsite.site.specifications;

import com.ecomsite.site.enums.ProductCategory;
import com.ecomsite.site.modal.Product;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class ProductSpecification {
    public static Specification<Product> hasNamelike(String name) {
        return ((root, query, criteriaBuilder) -> {
            return criteriaBuilder.like(root.get("name"), "%"+name + "%");
        });
    }
    public static Specification<Product> hasType(ProductCategory type)
    {
        return ((root, query, criteriaBuilder) -> {
            return  criteriaBuilder.equal(root.get("type"),type);
        });
    }
}
