package com.penpick.reservation.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.pension.model.Pensions;
import com.penpick.pension.service.PensionService;
import com.penpick.reservation.model.Reservation;
import com.penpick.reservation.repository.ReservationRepository;
import com.penpick.users.model.Users;


@Service
public class ReservationService{

    @Autowired
    private PenpickUserService penpickUserService;

    @Autowired
    private PensionService pensionsService;

    @Autowired
    private ReservationRepository reservationRepository; 
    

    public void makeReservation(String nickname,Long id,int quantity) {
    	Users penpickUser = penpickUserService.getUserByNickname(nickname);
        Pensions pensions = pensionsService.getPensionsById(id);
       

        Reservation reservation = new Reservation();
        reservation.setPenpickUser(penpickUser);
        reservation.setPensions(pensions);
        reservation.setQuantity(quantity);

        reservationRepository.save(reservation);
    }

    public List<Reservation> getUserReservations(String nickname) {
    	Users penpickUser = penpickUserService.getUserByNickname(nickname);
        return reservationRepository.findByPenpickUser(penpickUser);
    }
    
    public List<Reservation> getAllReservation(){
    	return reservationRepository.findAll();
    }

	
}