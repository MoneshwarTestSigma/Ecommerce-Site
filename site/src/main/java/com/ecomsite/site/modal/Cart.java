package com.ecomsite.site.modal;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "cart")
public class Cart {
    //We implement UserDetails it belongs to serializeable
    @Id
    @GeneratedValue
    Long id;
    @Column(name = "productid")
    Long productid;
    @Column(name = "userid")
    Long userid;
    @Column(name = "quantity")
    Long quantity;
}