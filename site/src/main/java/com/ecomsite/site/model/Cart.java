package com.ecomsite.site.model;

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