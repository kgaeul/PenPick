package com.penpick.vo;

import lombok.AllArgsConstructor;
import jakarta.persistence.Id;
import lombok.*;
import lombok.NoArgsConstructor;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PensionModel {

	@Id
	private int id;
	
	private String  name;
	
	private String contact;
	
	private String address;
	
	private int latitude;
	
	private int longitude;
	
	private String introduction;
	
	private String scale;
	
	private String parking;
	
	private String cook;
	
	private String check_in;
	
	private String check_out;
	
	private String dininghall;
	
	private String amenities;
	
	private String seminar;
	
	private String sports;
	
	private String sauna;
	
	private String beauty;
	
	private String karaoke;
	
	private String barbeque;
	
	private String campire;
	
	private String pc_room;
	
	private String public_shower;
	
	private String refund;
	
	private int double_room;
	
	private int triple_room;
	
	private int family_room;
	
	private int group_room;
	
	
	
	
	
	
	
}
