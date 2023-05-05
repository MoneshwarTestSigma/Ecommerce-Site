package com.ecomsite.site.controller;



import com.ecomsite.site.dto.UserJwtDTO;
import com.ecomsite.site.jwt.JwtTokenUtil;
import com.ecomsite.site.mapper.JwtMapper;
import com.ecomsite.site.dto.JwtResponse;
import com.ecomsite.site.model.User;
import com.ecomsite.site.request.JwtRequest;
import com.ecomsite.site.request.LoginRequest;
import com.ecomsite.site.service.JwtUserDetailsService;
import com.ecomsite.site.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

@RestController
@CrossOrigin(origins = "http://localhost:4200")

public class AuthController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService userDetailsService;

	private JwtMapper jwtMapper=new JwtMapper();
	@Autowired
	private UserService userService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginRequest loginRequest, HttpServletResponse response) throws Exception {
		JwtRequest authenticationRequest=jwtMapper.loginRequestToJwtRequest(loginRequest);
		authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());

		final UserDetails userDetails = userDetailsService
				.loadUserByUsername(authenticationRequest.getUsername());
		System.out.println(userDetails.toString());

		final String token = jwtTokenUtil.generateToken(userDetails);
		Cookie cookie=new Cookie("JWT",token);
		System.out.println(cookie);
		response.addCookie(cookie);
		response.addCookie(new Cookie("isLoggedIn","true"));
		return ResponseEntity.ok(new JwtResponse(token));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody User user) throws Exception {
		userService.addUser(user);
		UserJwtDTO userDto=jwtMapper.userToUserJwtDTO(user);
		return ResponseEntity.ok(userDetailsService.save(userDto));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}