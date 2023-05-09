package com.ecomsite.site.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
@Data
@Entity
@Table(name = "user_auth")
public class UserAuth {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private String username;
	@Column
	@JsonIgnore
	private String password;

}