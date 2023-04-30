package com.ecomsite.site.controller;

import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.model.Cart;
import com.ecomsite.site.mapper.CartMapper;
import com.ecomsite.site.request.CartRequest;
import com.ecomsite.site.service.CartService;
import com.ecomsite.site.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
@CrossOrigin
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
    ImageController imageController;
    @Autowired
    CartMapper cartMapper;
    @PostMapping()
    Cart addCart(@RequestBody CartRequest cartRequest) {
        System.out.println("here at cart");
        return this.cartService.cartAdd(this.cartMapper.cartRequestToCart(cartRequest));
    }
    @GetMapping("/{userid}")
    List<CartDTO> cartProductSend(@PathVariable("userid") Long userid){
        List<CartDTO> cartDTOS = new ArrayList<>();
        List<Cart> carts = new ArrayList<>();
        CartDTO cartDTO = new CartDTO();
        carts.addAll(this.cartService.cartFind(userid));
        for(Cart cart : carts){
            cartDTO = this.cartMapper.productToCartDTO(this.productService.productByid(cart.getProductid()).get());
            cartDTO.setQuantity(cart.getQuantity());
            cartDTO.setId(cart.getId());
            cartDTO.setProductid(this.productService.productByid(cart.getProductid()).get().getId());

            cartDTO.setImageUrl(imageController.getUrlFormId(cart.getProductid()));
            System.out.println(cartDTO.getImageUrl());
            cartDTOS.add(cartDTO);
//            System.out.println(cartDTO);
//         productDTOS.add(this.productMapper.productToProductDTO(this.productService.productByid(cart.getProductid()).get()));
        }
        return cartDTOS;
    }
    @DeleteMapping("/delete/{id}")
    void cartDelete(@PathVariable("id") Long id){
        this.cartService.deleteCart(id);
    }
}
