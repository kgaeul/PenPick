package com.penpick.chat.controller;

import java.util.List;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.stereotype.Controller;

import com.penpick.chat.vo.ChatMessage;

@Controller
public class ChatController {

	// 클라이언트로부터 메시지를 받는 핸들러
    @MessageMapping("/websocket")
    // 메시지를 특정 주제로 브로드캐스트하여 클라이언트에게 전송
    @SendTo("/topic/messages")
    public List<ChatMessage> send(@Payload List<ChatMessage> message) throws Exception {
    	System.out.println("hi");
            Thread.sleep(1000); // simulated delay
        // 메세지 전송
        return message;
    }
}
