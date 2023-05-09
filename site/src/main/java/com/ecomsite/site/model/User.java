package com.ecomsite.site.model;


import com.ecomsite.site.enums.UserRole;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;
    @Column(name = "password")
    String password;
    @Column(name = "name")
    String name;
    @Column(name = "email")
    String email;
    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    UserRole type;

}