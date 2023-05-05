package com.ecomsite.site.model;


import com.ecomsite.site.enums.ProductCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "products")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    @Column(name = "name")
    String name;
    @Column(name = "description")
    String description;
    @Column(name = "price")
    String price;
    @Column(name = "count")
    Long count;
    @Column(name = "category")
    @Enumerated(EnumType.STRING)
    ProductCategory category;



}