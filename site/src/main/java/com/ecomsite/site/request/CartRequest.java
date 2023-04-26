package com.ecomsite.site.request;

import lombok.Data;

@Data
public class CartRequest {
    private Long userid;
    private Long productid;
    private Long quantity;
}
