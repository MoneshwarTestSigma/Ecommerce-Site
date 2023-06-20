package com.ecomsite.site.controller;

import com.ecomsite.site.specifications.Criteria;
import com.ecomsite.site.specifications.BaseSpecificationBuilder;
import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.request.ProductRequest;
import com.ecomsite.site.service.CartService;
import com.ecomsite.site.service.ProductService;
import com.ecomsite.site.specifications.ProductSpecificationBuilder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
public class ProductController {
    @Autowired
    CartService cartService;
    @Autowired
    ImageController imageController;
    @Autowired
    ProductSpecificationBuilder criteriaBuilder;
    @Autowired
    ProductService productService;
    @Autowired
    ProductMapper productMapper;

    @PostMapping()
    Product addProduct(@RequestBody ProductRequest productRequest){
        return productService.productAdd(productMapper.map(productRequest));
    }

    @GetMapping()
    List<ProductDTO> index(@RequestParam("query") String data){
        List<ProductDTO> productDTOList = new ArrayList<>();
        List<Criteria> criteriaList = criteriaBuilder.builder(data);
        for(Product product: productService.searchProducts(criteriaList)){
            ProductDTO productDTO=productMapper.map(product);
            productDTO.setImageURL(imageController.getUrlFormId(product.getId()));
            productDTOList.add(productDTO);
        }
        return productDTOList;
    }

    @GetMapping("/{id}")
    Long getCountOfProductById(@PathVariable("id") Long id)
    {

        Optional<Product> product= productService.productByid(id);
        if(product.isPresent())
        {
            return product.get().getCount();
        }
        return 0l;
    }

    @GetMapping("/inventory")
    List<ProductDTO> sendListOfProducts(){

        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product : productService.findAll()){
            ProductDTO productDTO=productMapper.map(product);

            productDTO.setImageURL(imageController.getUrlFormId(product.getId()));

         productDTOS.add(productDTO);
        }

    return productDTOS;
    }
}
