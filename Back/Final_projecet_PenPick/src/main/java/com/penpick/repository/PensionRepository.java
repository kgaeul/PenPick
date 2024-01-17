package com.penpick.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.vo.Pensions;

public interface PensionRepository extends JpaRepository<Pensions, Integer>{
	
	
	Pensions findByName(String name);
	
//	List<Pensions> findByAddress(String PensionAddress);
//	
//	List<Pensions> findByNameOrAddress(String SearchWord1, String SearchWord2);
	
	
	

}
