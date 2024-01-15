package com.penpick.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.penpick.vo.PensionModel;

public interface PensionRepository extends JpaRepository<PensionModel, Integer>{
	
	
	List<PensionModel> findByNameOrAddress(String SearchWord);
	
	List<PensionModel> findByName(String PensionName);
	
	List<PensionModel> findByAddress(String PensionAddress);
	
	

}
