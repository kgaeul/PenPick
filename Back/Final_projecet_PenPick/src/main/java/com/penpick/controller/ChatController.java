package com.penpick.controller;

import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.penpick.vo.ChatMessage;

@RestController
//@CrossOrigin(origins="http://localhost:3000", allowCredentials="true")
public class ChatController {

    // 클라이언트로부터 메시지를 받는 핸들러
    @MessageMapping("/websocket")
    // 메시지를 특정 주제로 브로드캐스트하여 클라이언트에게 전송
    @SendTo("/topic/messages")
    public ChatMessage send(ChatMessage message) {
        // 서버 콘솔에 메시지 수신 로그 출력
        System.out.println("Received message: " + message.getContent());
        
        // 받은 메시지를 클라이언트에게 브로드캐스트
        return message;
    }
}
