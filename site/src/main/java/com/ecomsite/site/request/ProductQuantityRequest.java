package com.ecomsite.site.request;

import com.ecomsite.site.enums.ProductCategory;
import lombok.Data;

@Data
public class ProductQuantityRequest {
    private String name;
    private String price;
    private Long productid;
    private Long id;
    private ProductCategory category;
    private Long quantity;

}