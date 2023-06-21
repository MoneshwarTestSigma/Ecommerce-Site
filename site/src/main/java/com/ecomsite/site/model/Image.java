package com.ecomsite.site.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor

@Table(name = "image")
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    Long product_id;
    String imageUrl;
    public Image(Long product_id,String imageUrl)
    {
        this.product_id=product_id;
        this.imageUrl=imageUrl;
    }

}
