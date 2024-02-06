package com.penpick.users.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name="PenpickUser")
public class Users {
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userEmail;
	
    private String password;
    
    private String phoneNumber;
    
    private String gender;
    
    private String nickname;
    
    private String access_token;
}