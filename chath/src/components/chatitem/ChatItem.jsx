import React from "react";
import "./chatitem.css";

const ChatItem = ({ user, onHide }) => {
  return (
    <div className={`chat-item ${user.isActive ? "active" : ""}`} onClick={onHide}>
      <img src={user.avatar} alt={`${user.name}'s avatar`} className="avatar" />
      <div className="chat-details">
        <div className="chat-title">
          <span className="name">{user.name}</span>
          <span className="time">{user.time}</span>
        </div>
        <div className="chat-message">
          <span>{user.message}</span>
          {user.unreadCount > 0 && <span className="unread-badge">{user.unreadCount}</span>}
        </div>
      </div>
    </div>
  );
};

export default ChatItem;
