package com.penpick.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.penpick.vo.Pensions;

public interface PensionRepository extends JpaRepository<Pensions, Integer>{
	
//	@Query("SELECT*FROM PENSIONS WHERE NAME =? OR ADDRESS=?")
	
	List<Pensions> findByNameOrAddress(String SearchWord1, String SearchWord2);
	
	List<Pensions> findByName(String PensionName);
	
	List<Pensions> findByAddress(String PensionAddress);
	
	

}
