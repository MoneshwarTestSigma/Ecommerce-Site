package entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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
    @Column(name = "date")
    String date;
}