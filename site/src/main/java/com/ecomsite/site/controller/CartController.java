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
            cartDTOS.add(cartDTO);
        }
        return cartDTOS;
    }

    @DeleteMapping("/{id}")
    void cartDelete(@PathVariable("id") Long id){
        this.cartService.deleteCart(id);
    }

    @PostMapping("/checkout")
    void deleteProducts(@RequestBody List<ProductQuantityRequest> productQuantityRequestList){

        for(ProductQuantityRequest productQuantityRequest:productQuantityRequestList){
            Product product = this.productMapper.productQuantityRequestToProduct(productQuantityRequest);
            product.setCount(productQuantityRequest.getQuantity());
            product.setId(productQuantityRequest.getProductid());
            this.productService.productQuantityDelete(product);
            cartService.deleteCart(productQuantityRequest.getId());
        }
    }
}
