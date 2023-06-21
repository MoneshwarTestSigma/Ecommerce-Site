package com.ecomsite.site.specifications;

import com.ecomsite.site.enums.ProductCategory;
import com.ecomsite.site.model.Product;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Component;

@Component
public class ProductSpecification {
//    public static Specification<Product> hasNamelike(String name) {
//        return ((root, query, criteriaBuilder) -> {
//            return criteriaBuilder.like(root.get("name"), "%"+name + "%");
//        });
//    }
//    public static Specification<Product> hasCategory(ProductCategory category)
//    {
//        return ((root, query, criteriaBuilder) -> {
//            return  criteriaBuilder.equal(root.get("category"),category);
//        });
//    }

    public Specification<Product> hasIt(Criteria criteria){
        switch(criteria.getKey()){
            case "name":
                return (root, query, criteriaBuilder) ->
                        criteriaBuilder.like(root.get("name"), "%"+criteria.getValue()+"%");
            case "category":
                return (root, query, criteriaBuilder) ->
                        criteriaBuilder.equal(root.get("category"),criteria.getValue() );
            default:
                return (root, query, criteriaBuilder) ->
                        criteriaBuilder.like(root.get("name"), criteria.getValue());
        }
    }
}
