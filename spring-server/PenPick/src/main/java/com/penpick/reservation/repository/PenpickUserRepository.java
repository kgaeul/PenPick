package com.penpick.reservation.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.users.model.Users;

public interface PenpickUserRepository extends JpaRepository<Users,Long>{
	
	
	Users findByNickname(String nickname);
	
	Users getUserByNickname(String nickname);
}
