package com.ecomsite.site.dto;

import com.ecomsite.site.enums.ProductCategory;
import lombok.Data;

@Data
public class CartDTO {
    private String name;
    private String price;
    private Long productid;
    private Long id;
    private ProductCategory category;
    private Long quantity;
    private String imageUrl;
}