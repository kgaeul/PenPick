package com.penpick.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.penpick.repository.PensionRepository;
import com.penpick.vo.PensionModel;

@Service
public class PensionService {
	
	@Autowired 
	private PensionRepository pensionRepository;
	
	//펜션 이름이나 지역 조회
	public List<PensionModel> PensionList(String SearchWord){
		return pensionRepository.findByNameOrAddress(SearchWord);
	}

	//펜션 이름 조회
	public List<PensionModel> PensionNameList(String PensionName){
		return pensionRepository.findByName(PensionName);
	}
	
	//펜션 지역 조회
	public List<PensionModel> PensionAddressList(String PensionAddress){
		return pensionRepository.findByName(PensionAddress);
	}
}
