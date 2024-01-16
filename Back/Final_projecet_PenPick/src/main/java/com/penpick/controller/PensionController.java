package com.penpick.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.service.PensionService;
import com.penpick.vo.Pensions;

@RestController
@CrossOrigin(origins="http://localhost:3000",allowCredentials="true")
public class PensionController {

	@Autowired
	private PensionService pensionService;
	
	@GetMapping("/pensionSearchList")
	public List<Pensions> PensionNameAndAddressList(@RequestParam String SearchWord1,@RequestParam String SearchWord2) {
		return pensionService.PensionList(SearchWord1, SearchWord2);
	}
	
	@GetMapping("/search")
	public List<Pensions>  PensionNameList(@RequestParam String name) {
		return pensionService.PensionNameList(name);
	}
	
	@GetMapping("/pensionAddressList")
	public List<Pensions> PensionAddressList(@RequestParam String PensionAddress) {
		return pensionService.PensionAddressList(PensionAddress);
	}

	@GetMapping("/pensionList")
	public List<Pensions> getAllPensionList(){
		return pensionService.getAllPensionList();
	}
	
}
