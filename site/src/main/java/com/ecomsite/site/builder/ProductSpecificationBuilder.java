package com.ecomsite.site.builder;

import com.ecomsite.site.criteria.Criteria;
import com.ecomsite.site.enums.ProductCategory;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.specifications.ProductSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductSpecificationBuilder {

    private ProductCategory productCategory;
    @Autowired
    private ProductSpecification productSpecification;
    public Specification builder(List<Criteria> criteriaList) {
        Specification<Product> specForName = null;
        for (Criteria x : criteriaList) {
            if(x.getKey().equalsIgnoreCase("name")){
                specForName = this.productSpecification.hasNamelike(x.getValue());
            } else if (x.getKey().equalsIgnoreCase("category")) {
                if(x.getValue().equalsIgnoreCase("mobile"))
                    productCategory = ProductCategory.MOBILE;
                else if (x.getValue().equalsIgnoreCase("laptop")) {
                    productCategory = ProductCategory.LAPTOP;
                } else if (x.getValue().equalsIgnoreCase("decorators")) {
                    productCategory = ProductCategory.DECORATORS;
                }
                else productCategory = ProductCategory.BAG;
            specForName = this.productSpecification.hasCategory(productCategory);

        }
        }
        Specification specification = Specification.where(specForName);
        return specification;
    }
}
