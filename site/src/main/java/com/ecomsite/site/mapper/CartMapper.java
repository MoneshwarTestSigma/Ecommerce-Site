package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.model.Cart;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.request.CartRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CartMapper {
    @Mapping(source = "cartRequest.userid",target = "userId")
    @Mapping(source = "cartRequest.productid",target = "productId")
    Cart map(CartRequest cartRequest);
    CartDTO map(Product product);
}
