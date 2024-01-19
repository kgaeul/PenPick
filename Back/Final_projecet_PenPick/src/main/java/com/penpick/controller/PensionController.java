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

@RequestMapping("/penpick")
@RestController
@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
public class PensionController {

	@Autowired
	private PensionService pensionService;
	
//	펜션 이름 검색
	@GetMapping("/searchPension")
	public List<Pensions>  PensionNameList(@RequestParam String name) {
		return pensionService.PensionNameList(name);
	}

//	펜션 통합검색
	@GetMapping("/searchAll")
    public List<Pensions> searchUsers(
            @RequestParam(required = false) String term) {
		System.out.println(term);
        if (term != null) {
            return pensionService.PensionList(term);
        }  else {
            throw new IllegalArgumentException("요청하는 파라미터 값을 찾을 수 없습니다.");
        }
    }
	
//모든 펜션 조회
	@GetMapping("/pensionList")
	public List<Pensions> getAllPensionList(){
		return pensionService.getAllPensionList();
	}
	
}
