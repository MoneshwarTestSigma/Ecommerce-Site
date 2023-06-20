package com.ecomsite.site.controller;

import com.ecomsite.site.service.ImageService;
import com.ecomsite.site.specifications.Criteria;
import com.ecomsite.site.specifications.CriteriaBuilder;
import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.request.ProductRequest;
import com.ecomsite.site.service.CartService;
import com.ecomsite.site.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
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
    CriteriaBuilder criteriaBuilder;
    @Autowired
    ProductService productService;
    @Autowired
    ProductMapper productMapper;
@ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping()
    Product addProduct(@RequestBody ProductRequest productRequest){
        return productService.productAdd(productMapper.map(productRequest));
    }
@ResponseStatus(HttpStatus.OK)
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
@ResponseStatus(HttpStatus.OK)
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
@ResponseStatus(HttpStatus.OK)
    @GetMapping("/inventory")
    List<ProductDTO> sendListOfProducts(){

        List<ProductDTO> productDTOS = new ArrayList<>();
        for(Product product : productService.findAll()){
            ProductDTO productDTO=productMapper.map(product);

            productDTO.setImageURL(imageController.getUrlFormId(product.getId()));

         productDTOS.add(productDTO);
        }
    System.out.println("Came here at inventory");

    return productDTOS;
    }

    @RestController
    @RequestMapping(value = "images")
    public static class ImageController {
        @Autowired
        public ImageService imageService;
        @ResponseStatus(HttpStatus.ACCEPTED)
        @PostMapping()
        public ResponseEntity uploadImage(@RequestParam("file") MultipartFile file, @RequestParam("id") Long id){
            return this.imageService.uploadToLocalFileSystem(file,id);
        }
        @ResponseStatus(HttpStatus.OK)
        @GetMapping(
                value = "/{imageName:.+}",
                produces = {MediaType.IMAGE_JPEG_VALUE,MediaType.IMAGE_GIF_VALUE,MediaType.IMAGE_PNG_VALUE}
        )
        public @ResponseBody byte[] getImageWithMediaType(@PathVariable(name = "imageName") String fileName) throws IOException {
            return this.imageService.getImageWithMediaType(fileName);
        }

        public String getUrlFormId(Long id)
        {
            return imageService.getUrlFromId(id);
        }

    }
}
