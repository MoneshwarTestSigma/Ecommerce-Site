package com.ecomsite.site.controller;

import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.modal.Product;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.request.ProductRequest;
import com.ecomsite.site.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
    @Autowired
    ProductService productService;
    @Autowired
    ProductMapper productMapper;
    @PostMapping()
    Product addProduct(@RequestBody ProductRequest productRequest){
        System.out.println("Came here at product");
        return this.productService.productAdd(this.productMapper.productRequestToProduct(productRequest));
    }
    @GetMapping()
    List<ProductDTO> sendListOfProducts(){
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product : this.productService.findAll()){
         productDTOS.add(this.productMapper.productToProductDTO(product));
        }

    return productDTOS;
    }
}
