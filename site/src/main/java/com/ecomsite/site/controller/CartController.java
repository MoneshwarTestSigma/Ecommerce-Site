package com.ecomsite.site.controller;

import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.model.Cart;
import com.ecomsite.site.mapper.CartMapper;
import com.ecomsite.site.model.Product;
import com.ecomsite.site.request.CartRequest;
import com.ecomsite.site.request.ProductQuantityRequest;
import com.ecomsite.site.service.CartService;
import com.ecomsite.site.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    CartService cartService;
    @Autowired
    ProductMapper productMapper;
    @Autowired
    ProductService productService;
    @Autowired
    ProductController.ImageController imageController;
    @Autowired
    CartMapper cartMapper;
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping()
    Cart addCart(@RequestBody CartRequest cartRequest) {
        return this.cartService.cartAdd(cartMapper.map(cartRequest));
    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/{userid}")
    List<CartDTO> cartProductSend(@PathVariable("userid") Long userid){
        List<CartDTO> cartDTOS = new ArrayList<>();
        List<Cart> carts = new ArrayList<>();
        CartDTO cartDTO = new CartDTO();
        carts.addAll(cartService.cartFind(userid));
        for(Cart cart : carts){
            cartDTO = cartMapper.map(productService.productByid(cart.getProductId()).get());
            cartDTO.setQuantity(cart.getQuantity());
            cartDTO.setId(cart.getId());
            cartDTO.setProductid(productService.productByid(cart.getProductId()).get().getId());
            cartDTO.setImageUrl(imageController.getUrlFormId(cart.getProductId()));
            cartDTOS.add(cartDTO);
        }
        return cartDTOS;
    }
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{id}")
    void cartDelete(@PathVariable("id") Long id){
        cartService.deleteCart(id);
    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PostMapping("/checkout")
    void deleteProducts(@RequestBody List<ProductQuantityRequest> productQuantityRequestList){

        for(ProductQuantityRequest productQuantityRequest:productQuantityRequestList){
            Product product = productMapper.map(productQuantityRequest);
            product.setCount(productQuantityRequest.getQuantity());
            product.setId(productQuantityRequest.getProductid());
            productService.productQuantityDelete(product);
            cartService.deleteCart(productQuantityRequest.getId());
        }
    }
}
