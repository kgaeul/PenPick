package com.penpick.reservation.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.reservation.model.Reservation;
import com.penpick.users.model.Users;


public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    List<Reservation> findByPenpickUser(Users penpickUser);
    
   
    
//    List<Reservation> findByUserNum(int userNum);
	
//	void makeReservation(String nickname, Long id, int quantity);
	
	
	
//	List<Reservation> getAllReservation();
}