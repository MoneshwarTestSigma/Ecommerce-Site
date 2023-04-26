package com.ecomsite.site.mapper;

import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.modal.Product;
import com.ecomsite.site.request.ProductRequest;
import org.mapstruct.Mapper;

import java.util.Optional;

@Mapper(componentModel = "spring")
public interface ProductMapper {
    Product productRequestToProduct(ProductRequest productRequest);
    ProductDTO productToProductDTO(Product product);
}
