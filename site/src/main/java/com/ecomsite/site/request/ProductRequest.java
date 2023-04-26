package com.ecomsite.site.request;

import com.ecomsite.site.enums.ProductCategory;
import lombok.Data;

@Data
public class ProductRequest {
    private String name;
    private String price;
    private String description;
    private ProductCategory category;
    private Long count;
}
