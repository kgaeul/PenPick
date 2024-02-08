	package com.penpick.pension.controller;

import java.sql.Blob;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.pension.dto.PensionDTO;
import com.penpick.pension.model.Pensions;
import com.penpick.pension.service.PensionService;



@RequestMapping("/penpick")
@RestController
public class PensionController {

	@Autowired
	private PensionService pensionService;
	
	//펜션 통합검색(김가을)
	@GetMapping("/searchAll")
    public List<Pensions> searchUsers(
            @RequestParam(required = false) String term,@RequestParam(required = false) String filter)  {
		System.out.println("검색어 : "+term+"필터링 :"+filter);
		
		//검색어만 있을 때
        if (filter == null) {
            return pensionService.PensionList(term);
            
        //검색어 필터링 검색어 둘다 있을 때
        } else if(term != null&&filter !=null ){
        	return pensionService.PensionFilterList(term, "있음");
        	
        //둘다 없을 때
        } else {
             throw new IllegalArgumentException("요청하는 파라미터 값을 찾을 수 없습니다.");
        }
    }
	

	//모든 펜션 조회(김가을)
	@GetMapping("/pensionList")
	public List<Pensions> getAllPensionList(){
		return pensionService.getAllPensionList();
	}

	
	// 펜션 상세 페이지 이동(서광원)
		@GetMapping("/details")
		public Pensions DetailsPension(@RequestParam Long id) {
			Pensions pension = pensionService.getPensionById(id);
			return pension;
		}
		
		
	//====================================동재님 것============================================
		@GetMapping("/list")
		public ResponseEntity<List<Pensions>> getAllPensions(){
			List<Pensions> pensionsList = null;
			try {
				pensionsList = pensionService.getAllPensions();
			} catch (Exception e) {
				e.printStackTrace();
			}
			return ResponseEntity.ok(pensionsList);
		}
	
	
	
}