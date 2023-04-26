package com.ecomsite.site.builder;

import com.ecomsite.site.criteria.Criteria;
import com.ecomsite.site.modal.Product;
import com.ecomsite.site.specifications.ProductSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductSpecificationBuilder {
    @Autowired
    ProductSpecification productSpecification;
    public Specification builder(List<Criteria> criteriaList) {
        Specification<Product> specForName = null;
        for(Criteria x : criteriaList)
        {
            if(x.getKey().equalsIgnoreCase("name")){
                specForName = this.productSpecification.hasNamelike(x.getValue());
            }


        }
        Specification specification = Specification.where(specForName);
        return specification;
    }
}
