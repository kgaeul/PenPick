package com.penpick.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.penpick.service.PensionService;
import com.penpick.vo.Pensions;

@Controller
@RequestMapping("/penpick")
@CrossOrigin(origins="http://localhost:3000",allowCredentials="true")
public class PensionController {

	@Autowired
	private PensionService pensionService;
	
	@ResponseBody
	@GetMapping("/pensionSearchList")
	public List<Pensions> PensionNameAndAddressList(@RequestParam String SearchWord1,@RequestParam String SearchWord2) {
		return pensionService.PensionList(SearchWord1, SearchWord2);
	}
	
	@ResponseBody
	@GetMapping("/search/@{name}")
	public List<Pensions>  PensionNameList(String PensionName) {
		System.out.println(PensionName);
		return pensionService.PensionNameList(PensionName);
	}
	
	@ResponseBody
	@GetMapping("/pensionAddressList")
	public List<Pensions> PensionAddressList(@RequestParam String PensionAddress) {
		return pensionService.PensionAddressList(PensionAddress);
	}

	@ResponseBody
	@GetMapping("/pensionList")
	public List<Pensions> getAllPensionList(){
		return pensionService.getAllPensionList();
	}
	
}
