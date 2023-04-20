package entity;


import enums.Role;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

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