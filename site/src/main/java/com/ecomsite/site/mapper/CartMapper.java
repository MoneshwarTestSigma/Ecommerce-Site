package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.model.Cart;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.request.CartRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface CartMapper {
    Cart cartRequestToCart(CartRequest cartRequest);
    CartDTO productToCartDTO(Product product);
}
