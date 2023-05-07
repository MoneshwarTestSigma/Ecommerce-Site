package com.ecomsite.site.controller;

import com.ecomsite.site.criteria.Criteria;
import com.ecomsite.site.criteria.CriteriaBuilder;
import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.request.ProductQuantityRequest;
import com.ecomsite.site.request.ProductRequest;
import com.ecomsite.site.service.CartService;
import com.ecomsite.site.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.Option;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/product")
@CrossOrigin
public class ProductController {
    @Autowired
    CartService cartService;
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
        return this.productService.productAdd(this.productMapper.productRequestToProduct(productRequest));
    }

    @GetMapping()
    List<ProductDTO> index(@RequestParam("query") String data){
        List<ProductDTO> productDTOList = new ArrayList<>();
        List<Criteria> criteriaList = criteriaBuilder.builder(data);
        for(Product product: productService.searchProducts(criteriaList)){
            ProductDTO productDTO=this.productMapper.productToProductDTO(product);

            productDTO.setImageURL(imageController.getUrlFormId(product.getId()));
            productDTOList.add(productDTO);
        }
        return productDTOList;
    }

    @GetMapping("/{id}")
    Long getCountOfProductById(@PathVariable("id") Long id)
    {

        Optional<Product> product= this.productService.productByid(id);
        if(product.isPresent())
        {
            return product.get().getCount();
        }
        return 0l;
    }

    @GetMapping("/inventory")
    List<ProductDTO> sendListOfProducts(){

        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product : this.productService.findAll()){
            ProductDTO productDTO=this.productMapper.productToProductDTO(product);

            productDTO.setImageURL(imageController.getUrlFormId(product.getId()));

         productDTOS.add(productDTO);
        }

    return productDTOS;
    }
}
