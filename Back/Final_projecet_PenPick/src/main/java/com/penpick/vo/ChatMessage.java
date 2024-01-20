package com.penpick.vo;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class ChatMessage {

	@Id
	private int id;
    private String content;
    private String sender;

}
