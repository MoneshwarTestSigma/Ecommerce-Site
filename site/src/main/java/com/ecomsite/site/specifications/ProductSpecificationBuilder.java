package com.ecomsite.site.specifications;

import com.ecomsite.site.enums.ProductCategory;
import com.ecomsite.site.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductSpecificationBuilder {

    @Autowired
    private ProductSpecification productSpecification;

    public Specification builder(List<Criteria> criteriaList) {
        Specification<Product> result = this.productSpecification.hasIt(criteriaList.get(0));
        for (int i = 1; i < criteriaList.size(); i++) {
            result = Specification.where(result).or(this.productSpecification.hasIt(criteriaList.get(i)));
        }
        return result;
    }
}
