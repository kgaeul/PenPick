package com.penpick.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.repository.PensionRepository;
import com.penpick.vo.Pensions;

@Service
public class PensionService {
	
	@Autowired 
	private PensionRepository pensionRepository;
	
	//펜션 이름이나 지역 조회
	public List<Pensions> PensionList(String SearchWord1, String SearchWord2){
		return pensionRepository.findByNameOrAddress(SearchWord1, SearchWord2);
	}

	//펜션 이름 조회
	public List<Pensions> PensionNameList(String PensionName){
		return pensionRepository.findByName(PensionName);
	}
	
	//펜션 지역 조회
	public List<Pensions> PensionAddressList(String PensionAddress){
		return pensionRepository.findByName(PensionAddress);
	}
	
	
	public List<Pensions> getAllPensionList(){
		return pensionRepository.findAll();
	}
}
