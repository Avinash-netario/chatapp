import React, { useState } from "react";
import IncomingMessage from "./IncomingMessage";
import OutgoingMessage from "./OutgoingMessage";
import ChatBox from "./ChatBox";
import "./chatwindow.css";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { IoCallOutline } from "react-icons/io5";
import UserImg from '../../assets/avi.jpg'
import { FaCircle } from "react-icons/fa";



const ChatWindow = () => {
  const [messages, setMessages] = useState([
    { id: 1, content: "Haha, me neither! I literally had to pause", time: "12:25PM", type: "text", isOutgoing: false },
    { id: 2, content: "Haha, me neither! I literally had to pause and process what just happened.", time: "12:25PM", type: "text", isOutgoing: true },
    { id: 3, content: "License-1235444-39.pdf", time: "12:25PM", type: "file", isOutgoing: true },
    { id: 4, content: "Video message", time: "12:25PM", type: "file", isOutgoing: false },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { id: Date.now(), content: message, time: "Just now", type: "text", isOutgoing: true }]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">
        <div className="user-info">
          <img src={UserImg} alt="User Avatar" className="avatar" />
          <div>
            <h3>Harsh Singh</h3>
            <span className="status"><FaCircle className="status-icon" /> Active</span>
          </div>
        </div>
        <div className="chat-actions">
          <button><HiOutlineVideoCamera /></button>
          <button><IoCallOutline /></button>
        </div>
      </div>

      <div className="chat-messages">
        {messages.map((message) =>
          message.isOutgoing ? (
            <OutgoingMessage key={message.id} message={message} />
          ) : (
            <IncomingMessage key={message.id} message={message} />
          )
        )}
      </div>

      <ChatBox onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatWindow;
