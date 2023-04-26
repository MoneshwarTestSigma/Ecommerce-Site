package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.request.ProductRequest;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productRequestToProduct(ProductRequest productRequest);
    ProductDTO productToProductDTO(Product product);
}
