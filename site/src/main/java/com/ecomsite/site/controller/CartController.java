package com.ecomsite.site.controller;

import com.ecomsite.site.dto.CartDTO;
import com.ecomsite.site.dto.ProductDTO;
import com.ecomsite.site.mapper.ProductMapper;
import com.ecomsite.site.modal.Cart;
import com.ecomsite.site.modal.Product;
import com.ecomsite.site.mapper.CartMapper;
import com.ecomsite.site.request.CartRequest;
import com.ecomsite.site.service.CartService;
import com.ecomsite.site.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
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
            cartDTOS.add(cartDTO);
//         productDTOS.add(this.productMapper.productToProductDTO(this.productService.productByid(cart.getProductid()).get()));
        }
        return cartDTOS;
    }
}