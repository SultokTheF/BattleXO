import React, { useEffect, useState, useRef } from "react";
import "./Chat.css";
import io from "socket.io-client";

import useUserData from "../../../../hooks/useUserData";
import { chatEndpoint } from "../../../../constants/endpoints";
import avatar from "../../../../constants/profile_iamge";

const Chat: React.FC = () => {
  const userData = useUserData();

  const [messages, setMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");
  
  const chatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const socket = io(chatEndpoint);

    socket.on("chatMessage", (message: any) => {
      setMessages((prevMessages) => [...prevMessages, message]);
      scrollToBottom();
    });

    socket.on("loadMessages", (loadedMessages: any) => {
      setMessages(loadedMessages);
      scrollToBottom();
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const scrollToBottom = () => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  };

  const isOwnMessage = (sender: string | undefined) => {
    return sender === userData?.username;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputMessage.trim() !== "") {
      const newMessage = {
        sender: userData?.username,
        message: inputMessage,
        profileImage: userData?.profile_image
      };

      const socket = io(chatEndpoint);
      socket.emit("chatMessage", newMessage);

      setInputMessage("");
    }
  };

  return (
    <>
      <div className="chat" ref={chatRef}>
        <div className="chat-msg">
          {messages.map((message, index) => (
            <div className="bubbleWrapper" key={index}>
              <div className={`inlineContainer ${isOwnMessage(message.sender) ? "own" : "other"}`}>
                <img className="inlineIcon" src={avatar[message.profileImage]} alt={`icon-${index}`} />
                <div className={`${isOwnMessage(message.sender) ? "own" : "other"}Bubble`}>
                  {message.message}
                </div>
              </div>
              <span className={isOwnMessage(message.sender) ? "own" : "other"}>
                {message.sender}: {message.timestamp}
              </span>
            </div>
          ))}
        </div>

        { localStorage.getItem("accessToken") ? (
          <>
            <form className="msger-inputarea" onSubmit={handleSendMessage}>
              <input
                type="text"
                className="msger-input"
                placeholder="Enter your message..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </>
        ) : (
          <>
            <form className="msger-inputarea">
              <input
                type="text"
                className="msger-input"
                placeholder="Authorize first"
              />
            </form>
          </>
        ) }
      </div>
    </>
  );
};

export default Chat;
