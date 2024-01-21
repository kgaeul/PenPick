package com.penpick.config;

import java.util.List;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.converter.MappingJackson2MessageConverter;
import org.springframework.messaging.converter.MessageConverter;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

import com.fasterxml.jackson.databind.ObjectMapper;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    // configureMessageBroker 메서드: MessageBroker 설정
    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // STOMP를 사용하는 Message Broker가 "/topic"으로 시작되는 주제를 구독하는 클라이언트에게 메시지를 전송합니다.
        config.enableSimpleBroker("/topic");

        // 클라이언트에서 서버로 메시지를 전송할 때의 prefix를 설정합니다.
        // 예를 들어, "/app/chat"으로 메시지를 전송하면, "/app" prefix를 제외한 "/chat"이라는 목적지로 메시지가 전달됩니다.
        config.setApplicationDestinationPrefixes("/app");

        System.out.println("성공 1!");
    }

    // registerStompEndpoints 메서드: WebSocket 엔드포인트 등록
    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // "/websocket" 경로를 통해 STOMP 엔드포인트를 등록하고, SockJS를 사용하도록 설정합니다.
        // SockJS는 WebSocket을 지원하지 않는 브라우저에 대한 대체 옵션을 제공합니다.
        registry.addEndpoint("/websocket")
        .setAllowedOrigins("http://localhost:3000")
        .withSockJS();

        System.out.println("성공 2!");
    }
    
}
