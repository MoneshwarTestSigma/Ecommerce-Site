package entity;


import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "product")
public class Product {
    //We implement UserDetails it belongs to serializeable
    @Id
    @GeneratedValue
    Long id;
    @Column(name = "name")
    String name;
    @Column(name = "description")
    String description;
    @Column(name = "price")
    Long price;
    @Column(name = "count")
    Long count;
    @Column(name = "date")
    String date;



}