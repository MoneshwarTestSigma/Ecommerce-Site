package com.ecomsite.site.dto;

import com.ecomsite.site.enums.ProductCategory;
import lombok.Data;

@Data
public class ProductDTO {
    private String name;
    private String price;
    private ProductCategory category;
    private String description;
    private Long count;
    private Long id;
    private String imageURL;
}
