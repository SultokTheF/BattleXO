import React, { useEffect, useState } from "react";
import "./Chat.css";
import io from "socket.io-client";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");

  useEffect(() => {
    // Connect to the Socket.IO server
    const socket = io("http://127.0.0.1:8080/"); // Update with your server URL

    // Listen for incoming messages
    socket.on("chatMessage", (message: any) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Load previous messages on component mount
    socket.on("loadMessages", (loadedMessages: any) => {
      setMessages(loadedMessages);
    });

    // Cleanup on component unmount
    return () => {
      socket.disconnect();
    };
  }, []); // Empty dependency array ensures this effect runs once on mount

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();

    // Send the message to the server
    if (inputMessage.trim() !== "") {
      const newMessage = {
        sender: "own",
        icon: "https://www.pinclipart.com/picdir/middle/205-2059398_blinkk-en-mac-app-store-ninja-icon-transparent.png",
        message: inputMessage,
        timestamp: new Date().toLocaleTimeString(),
      };

      // Update the local state optimistically
      setMessages((prevMessages) => [...prevMessages, newMessage]);

      // Emit the message to the server
      const socket = io("http://127.0.0.1:8080/"); // Update with your server URL
      socket.emit("chatMessage", newMessage);

      // Clear the input field
      setInputMessage("");
    }
  };

  return (
    <>
      <div className="chat">
        <div className="chat-msg">
          {messages.map((message, index) => (
            <div className="bubbleWrapper" key={index}>
              <div className={`inlineContainer ${message.sender}`}>
                <img className="inlineIcon" src={message.icon} alt={`icon-${index}`} />
                <div className={`${message.sender}Bubble ${message.sender}`}>
                  {message.message}
                </div>
              </div>
              <span className={message.sender}>{message.timestamp}</span>
            </div>
          ))}
        </div>

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
      </div>
    </>
  );
};

export default Chat;
