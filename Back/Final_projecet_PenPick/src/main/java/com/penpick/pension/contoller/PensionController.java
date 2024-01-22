	package com.penpick.pension.contoller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.pension.Pensions;
import com.penpick.pension.service.PensionService;


@RequestMapping("/penpick")
@RestController
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
            @RequestParam(required = false) String term,@RequestParam(required = false) String filter)  {
		System.out.println(term);
		System.out.println(filter);
        if (filter == null) {
        	System.out.println("ㄱㄱ");
            return pensionService.PensionList(term);
        } else if(term != null&&filter !=null ){
        	System.out.println("rr");
        	return pensionService.PensionFilterList(term, "있음");
        } else {
             throw new IllegalArgumentException("요청하는 파라미터 값을 찾을 수 없습니다.");
        }
    }
	
	//모든 펜션 조회
	@GetMapping("/pensionList")
	public List<Pensions> getAllPensionList(){
		return pensionService.getAllPensionList();
	}
	
}
