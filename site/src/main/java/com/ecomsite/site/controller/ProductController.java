package com.ecomsite.site.controller;

import com.ecomsite.site.criteria.Criteria;
import com.ecomsite.site.criteria.CriteriaBuilder;
import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.request.ProductQuantityRequest;
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
    ImageController imageController;
    @Autowired
    CriteriaBuilder criteriaBuilder;
    @Autowired
    ProductService productService;
    @Autowired
    ProductMapper productMapper;
    @PostMapping()
    Product addProduct(@RequestBody ProductRequest productRequest){
        System.out.println("Came here at product");
        return this.productService.productAdd(this.productMapper.productRequestToProduct(productRequest));
    }
    @GetMapping("/all")
    List<ProductDTO> sendListOfProducts(){
//        System.out.println("Entered here");
        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product : this.productService.findAll()){
            ProductDTO productDTO=this.productMapper.productToProductDTO(product);
//            System.out.println("before:"+ productDTO);
            productDTO.setImageURL(imageController.getUrlFormId(product.getId()));
//            System.out.println("after:"+ productDTO);
         productDTOS.add(productDTO);
        }

    return productDTOS;
    }
    @GetMapping()
    List<ProductDTO> searchProducts(@RequestParam("query") String data){
        List<ProductDTO> productDTOList = new ArrayList<>();
        List<Criteria> criteriaList = criteriaBuilder.builder(data);
         for(Product product: productService.searchProducts(criteriaList)){
             productDTOList.add(this.productMapper.productToProductDTO(product));
         }
         return productDTOList;
    }
    @PostMapping("/quantity")
    void deleteProducts(@RequestBody List<ProductQuantityRequest> productQuantityRequestList){
        for(ProductQuantityRequest productQuantityRequest:productQuantityRequestList){
            Product product = this.productMapper.productQuantityRequestToProduct(productQuantityRequest);
            product.setCount(productQuantityRequest.getQuantity());
            product.setId(productQuantityRequest.getProductid());
            this.productService.productQuantityDelete(product);
        }
    }

}
