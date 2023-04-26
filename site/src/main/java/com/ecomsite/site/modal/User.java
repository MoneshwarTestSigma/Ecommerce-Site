package com.ecomsite.site.modal;


import com.ecomsite.site.enums.Role;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {
    //We implement UserDetails it belongs to serializeable
    @Id
    @GeneratedValue
    Long id;
    @Column(name = "password")
    String password;
    @Column(name = "name")
    String name;
    @Column(name = "email")
    String email;
    @Column(name = "type")
    @Enumerated(EnumType.STRING)
    Role type;

}