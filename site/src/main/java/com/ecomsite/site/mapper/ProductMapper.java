package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.request.ProductQuantityRequest;
import com.ecomsite.site.request.ProductRequest;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product map(ProductRequest productRequest);

    ProductDTO map(Product product);
    Product map(ProductQuantityRequest productQuantityRequest);
}
