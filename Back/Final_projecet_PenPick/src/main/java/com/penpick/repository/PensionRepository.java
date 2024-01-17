package com.penpick.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.penpick.vo.Pensions;

public interface PensionRepository extends JpaRepository<Pensions, Integer>{
	
	//펜션이름 검색
	List<Pensions> findByName(String name);
	
	//	지역 검색
	List<Pensions> findByAddressContaining(String address);
	
	
	//통합 검색
	 @Query("SELECT p FROM Pensions p WHERE p.name LIKE %:term% OR p.address LIKE %:term%")
	 List<Pensions> findByNameOrAddressContaining(@Param("term") String term);
	
	
	

}
