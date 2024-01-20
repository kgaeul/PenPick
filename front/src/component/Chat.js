import Stomp from 'webstomp-client';
import React, { useState, useEffect } from 'react';
import SockJS from 'sockjs-client';

const Chat = () => {
    // 받은 메시지를 저장하기 위한 상태
    const [messages, setMessages] = useState([]);

    // Stomp 클라이언트를 저장하기 위한 상태
    const [stompClient, setStompClient] = useState(null);

    // 사용자로부터 입력받은 메시지를 저장하기 위한 상태
    const [inputMessage, setInputMessage] = useState('');

    // 컴포넌트가 마운트될 때 WebSocket 서버에 연결하기 위한 효과 훅
    useEffect(() => {
        // WebSocket 연결을 설정하는 함수
        const connect = () => {
            // WebSocket 통신을 위한 SockJS 객체 생성
            const socket = new SockJS('/websocket');
            console.log('여기까지 됨');
            // WebSocket 연결 위에 Stomp 클라이언트 생성
            var stomp = Stomp.over(socket);
            console.log('여기까지도 됨');
            // WebSocket 서버에 연결
            stomp.connect({}, frame => {
                console.log('연결됨: ' + frame);
                // Stomp 클라이언트를 컴포넌트 상태에 설정
                setStompClient(stomp);
                stomp.activate()
            });
        };
        // 컴포넌트가 마운트될 때 한 번만 실행되도록 하기 위해 빈 의존성 배열 사용
        connect();

    }, []);

    const sendMessage = content => {
        if (stompClient) {
            // 내용과 송신자 정보를 포함한 메시지 객체 생성
            const message = { content, sender: 'user' };
    
            // 메시지를 '/app/chat' 목적지로 서버에 전송
            stompClient.send('/app/websocket', {}, JSON.stringify(message));
        } else {
            console.error('Stomp client is not initialized.');
        }
    };

    // '/topic/messages' 목적지에서 메시지를 구독하는 함수
    const subscribeToMessages = () => {
        // '/topic/messages' 목적지를 구독
        stompClient.subscribe('/topic/messages', response => {
            // 받은 메시지를 파싱하고 상태에 추가
            const message = JSON.parse(response.body);
            setMessages([...messages, message]);
        });
    };

    // Stomp 클라이언트가 설정되면 메시지를 구독하기 위한 효과 훅
    useEffect(() => {
        if (stompClient) {
            subscribeToMessages();
        }
    }, [stompClient]);

    return (
        <div>
            <div>
                {messages.map((message, index) => (
                    <div key={index}>
                        {message.sender}: {message.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                onChange={e => setInputMessage(e.target.value)}
                value={inputMessage}
            />
            <button onClick={() => sendMessage(inputMessage)}>전송</button>
        </div>
    );
};

export default Chat;
